const client = require("../client");
const steem = require("steem");
const PrivateKey = require("dsteem").PrivateKey;
const set = require("ramda").set;
const { concat, propOr, pathOr } = require("ramda");
const { createPermLink, createJSONMetadata } = require("../helpers/helpers");

const mutations = {
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
  },
  /**
   * Convenience method to create a comment with minimal input.
   * @param root
   * @param args
   * @returns {Promise.<*>}
   */
  async createComment(root, args) {
    const { comment, options, key } = args;

    // The Post object
    const newComment = {
      author: comment.author,
      title: "",
      body: comment.body,
      permlink: steem.formatter.commentPermlink(
        comment.parent_author,
        comment.parent_permlink
      ),
      json_metadata: createJSONMetadata({}),
      parent_author: comment.parent_author,
      parent_permlink: comment.parent_permlink
    };

    // Adding beneficiaries by default, 5% to steemql.
    const beneficiaries = concat(propOr([], "extensions")(options), [
      {
        account: "steemql",
        weight: 500
      }
    ]);

    // Optional options
    const commentOptions = {
      allow_curation_rewards: pathOr(true, "allow_curation_rewards", options),
      allow_votes: pathOr(true, "allow_votes", options),
      author: comment.author,
      permlink: newComment.permlink,
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
      newComment,
      commentOptions,
      PrivateKey.from(key)
    );

    return await steem.api.getContentAsync(
      newComment.author,
      newComment.permlink
    );
  }
};

module.exports = mutations;
