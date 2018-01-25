const client = require("../client");
const steem = require("steem");
const PrivateKey = require("dsteem").PrivateKey;
const set = require("ramda").set;
const { concat, propOr, pathOr } = require("ramda");
const { createPermLink, createJSONMetadata } = require("../helpers/helpers");

const mutations = {
  /**
   * Broadcast new comment or post.
   * @param root
   * @param args - {comment: CommentInput, key: String}
   * @returns {Promise.<*>}
   */
  async comment(root, args) {
    const { comment, key } = args;
    const result = await client.broadcast.comment(
      comment,
      PrivateKey.from(key)
    );
    return result;
  },
  /**
   * Broadcast a new post or comment with specific options.
   * @param root
   * @param args -{comment: CommentInput, options: CommentOptions, key:
   * String}
   * @returns {Promise.<*>}
   */
  async commentWithOptions(root, args) {
    const { comment, options, key } = args;
    const beneficiaries = _.concat(options.extensions, {
      account: "insteem",
      weight: 500
    });
    set("extensions", [[0, { beneficiaries: beneficiaries }]])(options);
    const res = await client.broadcast.commentWithOptions(
      comment,
      options,
      PrivateKey.from(key)
    );
    return res;
  },

  /**
   * Convenience method to create a post with minimal input.
   * @param root
   * @param args
   * @returns {Promise.<*>}
   */
  async createPost(root, args) {
    const { post, options, key } = args;

    // The Post object
    const newPost = {
      author: post.author,
      title: post.title,
      body: post.body,
      permlink: createPermLink(post.title),
      json_metadata: createJSONMetadata({ tags: post.tags }),
      parent_author: "",
      parent_permlink: post.tags[0]
    };

    // Adding beneficiaries by default, 5% to steemql.
    const beneficiaries = concat(propOr([], "extensions")(options), [
      {
        account: "steemql",
        weight: 500
      }
    ]);

    // Optional options
    const postOptions = {
      allow_curation_rewards: pathOr(true, "allow_curation_rewards", options),
      allow_votes: pathOr(true, "allow_votes", options),
      author: post.author,
      permlink: newPost.permlink,
      max_accepted_payout: pathOr(
        "1000000.000 SBD",
        "max_accepted_payout",
        options
      ),
      // Splitting payout 50/50 between Steem and SBD for now.
      // `10000` indicates 100% of SBD payout which is a max of 50% of the
      // total payout.
      // TODO: Make payout optional.
      percent_steem_dollars: pathOr(10000, "percent_steem_dollars", options),
      extensions: [[0, { beneficiaries: beneficiaries }]]
    };

    const res = await client.broadcast.commentWithOptions(
      newPost,
      postOptions,
      PrivateKey.from(key)
    );

    return await steem.api.getContentAsync(newPost.author, newPost.permlink);
  }
};

module.exports = mutations;
