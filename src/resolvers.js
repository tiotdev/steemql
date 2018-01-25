// Imports
const mergeAll = require("ramda").mergeAll;

// Queries
// TODO: Rename `Resolvers` to `Queries`
const accountResolvers = require("./account/account.resolvers.js");
const postResolvers = require("./post/post.resolvers.js");
const searchResolvers = require("./search/search.resolvers");
const mentionQueries = require("./mention/mention.queries");

// Mutations
const postMutations = require("./post/post.mutations");
const voteMutations = require("./vote/vote.mutations");

// Merge resolvers before assigning to root Query because ramda's immutable
// mergeAll only merges the last child of the same object (Query:{}).
const resolvers = {
  Query: mergeAll([
    accountResolvers,
    mentionQueries,
    postResolvers,
    searchResolvers
  ]),
  Mutation: mergeAll([postMutations, voteMutations])
};

module.exports = resolvers;
