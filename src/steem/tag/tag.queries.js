const steem = require("steem");

const queries = {
  _getTrendingTags: async (root, args) => {
    const { afterTag = "", limit = 25 } = args;
    const result = await steem.api.getTrendingTagsAsync(afterTag, limit);
    return result;
  }
};

module.exports = queries;
