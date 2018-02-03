// Imports of all steem API mutations
const mergeAll = require("ramda").mergeAll;

const discussionMutations = require("./discussions/discussions.mutations");
const voteMutations = require("./vote/vote.mutations");

const mutations = mergeAll([discussionMutations, voteMutations]);

module.exports = mutations;
