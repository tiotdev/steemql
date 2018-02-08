const client = require("../client");
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
  }
};

module.exports = { Post };
