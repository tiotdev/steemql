const client = require("../../client.js");
const steem = require("steem");

const getAccounts = async (root, args) => {
  return await client.database.getAccounts(args.usernames);
};

const getFollowCount = async (root, args) => {
  const { username } = args;
  const followCount = await steem.api.getFollowCountAsync(username);
  return followCount;
};

const queries = {
  _getAccounts: getAccounts,
  _getFollowCount: getFollowCount,

  // Deprecated queries
  getAccounts: getAccounts,
  getFollowCount: getFollowCount
};

module.exports = queries;
