const client = require("../client");
const steem = require("steem");
const { head } = require("ramda");

const Post = {
  /**
   * Get a user for a post.
   * @param root
   * @param args
   * @returns {Promise<void>}
   */
  user: async (root, args) => {
    const { author } = root;
    const result = await client.database.getAccounts([author]);
    return head(result);
  },
  /**
   * Get votes for the post.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  votes: async (root, args) => {
    const { author, permlink } = root;
    const result = await steem.api.getActiveVotesAsync(author, permlink);
    return result;
  }
};

module.exports = { Post };
