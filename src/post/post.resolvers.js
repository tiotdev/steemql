const client = require("../client.js");

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
  }
};

module.exports = resolvers;
