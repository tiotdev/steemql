// Imports
const mergeAll = require("ramda").mergeAll;

// Queries
// TODO: Rename `Resolvers` to `Queries`
const userQueries = require("./user/user.queries.js");
const postQueries = require("./post/post.queries.js");
const searchResolvers = require("./search/search.resolvers");
const mentionQueries = require("./mention/mention.queries");
const voteQueries = require("./vote/vote.queries");
const steemQueries = require("./steem/queries");

const postProps = require("./post/post.props");
const userProps = require("./user/user.props");
const voteProps = require("./vote/vote.props");

// Mutations
const postMutations = require("./post/post.mutations");
const voteMutations = require("./vote/vote.mutations");
const steemMutations = require("./steem/mutations");

// Merge resolvers before assigning to root Query because ramda's immutable
// mergeAll only merges the last child of the same object (Query:{}).
const resolvers = {
  Query: mergeAll([
    mentionQueries,
    postQueries,
    searchResolvers,
    userQueries,
    voteQueries,
    // Standard steem api resolvers
    steemQueries
  ]),
  Mutation: mergeAll([postMutations, voteMutations, steemMutations]),
  Post: postProps.Post,
  Profile: userProps.Profile,
  User: userProps.User,
  Vote: voteProps.Vote
};

module.exports = resolvers;
