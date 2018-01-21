// Imports
const mergeAll = require("ramda").mergeAll;

const accountResolvers = require("./account/account.resolvers.js");
const postResolvers = require("./post/post.resolvers.js");

// Merge resolvers before assigning to root Query because ramda's immutable
// mergeAll only merges the last child of the same object (Query:{}).
const resolvers = { Query: mergeAll([accountResolvers, postResolvers]) };

module.exports = resolvers;
