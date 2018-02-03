const steem = require("steem");

const queries = {
  _getActiveVotes: async (root, args) => {
    const { author, permlink } = args;
    const result = await steem.api.getActiveVotesAsync(author, permlink);
    console.log(result);
    return result;
  }
};

module.exports = queries;
