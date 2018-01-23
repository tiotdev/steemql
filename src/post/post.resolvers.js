const client = require("../client.js");
const steem = require("steem");

const resolvers = {
  getDiscussions: async (root, args) => {
    const {
      by = "created",
      query: { tag = "", limit = 25, truncate = 0 } = {}
    } = args;
    const query = {
      tag: tag,
      limit: limit,
      truncate_body: truncate
    };
    const discussions = await client.database.getDiscussions(by, query);
    return discussions;
  },

  /**
   * Get single post.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  getContent: async (root, args) => {
    const { author, permlink } = args;
    const content = await steem.api.getContentAsync(author, permlink);
    return content;
  }
};

module.exports = resolvers;
