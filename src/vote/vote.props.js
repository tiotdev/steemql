const client = require("../client");
const { head } = require("ramda");

const Vote = {
  /**
   * Get a user for a post.
   * @param root
   * @param args
   * @returns {Promise<void>}
   */
  user: async (root, args) => {
    const { voter } = root;
    const result = await client.database.getAccounts([voter]);
    return head(result);
  }
};

module.exports = { Vote };
