const client = require("../client.js");
const steem = require("steem");
const head = require("ramda").head;

const queries = {
  // User
  user: async (root, args) => {
    const result = await client.database.getAccounts([args.username]);
    return head(result);
  },

  /**
   * Get multiple users by `username` strings
   * @param root
   * @param args
   * @returns {Promise<void>}
   */
  users: async (root, args) => {
    const { usernames } = args;
    const result = await client.database.getAccounts(usernames);
    return result;
  },

  // Account
  account: async (root, args) => {
    const res = await client.database.getAccounts([args.username]);
    return res[0];
  }
};

module.exports = queries;
