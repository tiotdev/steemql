const client = require("../client.js");
const steem = require("steem");

const resolvers = {
  // Account
  account: async (root, args) => {
    const res = await client.database.getAccounts([args.username]);
    return res[0];
  }
};

module.exports = resolvers;
