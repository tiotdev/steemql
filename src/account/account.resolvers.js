const client = require("../client.js");
const steem = require("steem");

const resolvers = {
  // Account
  account: async (root, args) => {
    const res = await client.database.getAccounts([args.username]);
    return res[0];
  },
  getAccounts: async (root, args) => {
    return await client.database.getAccounts(args.usernames);
  },
  getFollowCount: async (root, args) => {
    const { username } = args;
    const followCount = await steem.api.getFollowCountAsync(username);
    return followCount;
  }
};

module.exports = resolvers;
