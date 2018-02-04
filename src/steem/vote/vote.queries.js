const steem = require("steem");

const queries = {
  _getActiveVotes: async (root, args) => {
    const { author, permlink } = args;
    const result = await steem.api.getActiveVotesAsync(author, permlink);
    return result;
  }
};

module.exports = queries;
