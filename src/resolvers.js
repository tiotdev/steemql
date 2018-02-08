// Imports
const mergeAll = require("ramda").mergeAll;

// Queries
// TODO: Rename `Resolvers` to `Queries`
const userQueries = require("./user/user.queries.js");
const postQueries = require("./post/post.queries.js");
const searchResolvers = require("./search/search.resolvers");
const mentionQueries = require("./mention/mention.queries");
const steemQueries = require("./steem/queries");

const userProps = require("./user/user.props");
const postProps = require("./post/post.props");

// Mutations
const postMutations = require("./post/post.mutations");
const steemMutations = require("./steem/mutations");

// Merge resolvers before assigning to root Query because ramda's immutable
// mergeAll only merges the last child of the same object (Query:{}).
const resolvers = {
  Query: mergeAll([
    mentionQueries,
    postQueries,
    searchResolvers,
    userQueries,
    // Standard steem api resolvers
    steemQueries
  ]),
  Mutation: mergeAll([postMutations, steemMutations]),
  Post: postProps.Post,
  User: userProps.User,
  Profile: userProps.Profile
};

module.exports = resolvers;
