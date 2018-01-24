const client = require("../client");
const PrivateKey = require("dsteem").PrivateKey;
import { set } from "ramda";

const mutations = {
  /**
   * Broadcast new comment or post.
   * @param root
   * @param args - {comment: CommentInput, key: String}
   * @returns {Promise.<*>}
   */
  async comment(root, args) {
    console.log(args);
    const { comment, key } = args;
    console.log(comment);
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
    console.log(options);
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
  }
};

module.exports = mutations;
