// Imports of all steem API mutations
const mergeAll = require("ramda").mergeAll;

const accountMutations = require("./account/account.mutations");
const discussionMutations = require("./discussions/discussions.mutations");
const voteMutations = require("./vote/vote.mutations");

const mutations = mergeAll([
  accountMutations,
  discussionMutations,
  voteMutations
]);

module.exports = mutations;
