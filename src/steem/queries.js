// Imports of all steem API queries
const mergeAll = require("ramda").mergeAll;

const accountQueries = require("./account/account.queries");
const blockQueries = require("./block/block.queries");
const chainQueries = require("./chain/chain.queries");
const discussionsQueries = require("./discussions/discussions.queries");
const followQueries = require("./follow/follow.queries");
const tagQueries = require("./tag/tag.queries");
const voteQueries = require("./vote/vote.queries");

const queries = mergeAll([
  accountQueries,
  blockQueries,
  chainQueries,
  discussionsQueries,
  followQueries,
  tagQueries,
  voteQueries
]);

module.exports = queries;
