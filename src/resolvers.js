// Imports
const mergeAll = require("ramda").mergeAll;

// Queries
// TODO: Rename `Resolvers` to `Queries`
const userQueries = require("./user/user.queries.js");
// const postResolvers = require("./post/post.resolvers.js");
const searchResolvers = require("./search/search.resolvers");
const mentionQueries = require("./mention/mention.queries");
const steemQueries = require("./steem/queries");

const userProps = require("./user/user.props");

// Mutations
const postMutations = require("./post/post.mutations");
const steemMutations = require("./steem/mutations");

// Merge resolvers before assigning to root Query because ramda's immutable
// mergeAll only merges the last child of the same object (Query:{}).
const resolvers = {
  Query: mergeAll([
    mentionQueries,
    // postResolvers,
    searchResolvers,
    userQueries,
    // Standard steem api resolvers
    steemQueries
  ]),
  Mutation: mergeAll([postMutations, steemMutations]),
  User: userProps.User,
  Profile: userProps.Profile
};

module.exports = resolvers;
