const client = require("../client.js");

const resolvers = {
  // Account
  account: async (root, args) => {
    const res = await client.database.getAccounts([args.username]);
    return res[0];
  },
  getAccounts: async (root, args) => {
    return await client.database.getAccounts(args.usernames);
  }
};

module.exports = resolvers;
