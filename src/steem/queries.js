// Imports of all steem API queries
const mergeAll = require("ramda").mergeAll;

const accountQueries = require("./account/account.queries");
const followQueries = require("./follow/follow.queries");
const discussionsQueries = require("./discussions/discussions.queries");

const queries = mergeAll([accountQueries, followQueries, discussionsQueries]);

module.exports = queries;
