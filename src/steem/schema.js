const concat = require("ramda").concat;
const reduce = require("ramda").reduce;

const accountSchema = require("./account/account.schema");
const followSchema = require("./follow/follow.schema");
const discussionsSchema = require("./discussions/discussions.schema");
const transactionSchema = require("./transaction/transaction.schema");
const voteSchema = require("./vote/vote.schema");

module.exports = reduce(concat, "", [
  accountSchema,
  followSchema,
  discussionsSchema,
  transactionSchema,
  voteSchema
]);
