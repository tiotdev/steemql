// Imports of all steem API queries
const mergeAll = require("ramda").mergeAll;

const accountQueries = require("./account/account.queries");
const blockQueries = require("./block/block.queries");
const followQueries = require("./follow/follow.queries");
const discussionsQueries = require("./discussions/discussions.queries");

const queries = mergeAll([
  accountQueries,
  blockQueries,
  followQueries,
  discussionsQueries
]);

module.exports = queries;
