const concat = require("ramda").concat;
const reduce = require("ramda").reduce;

const accountSchema = require("./account/account.schema");
const blockSchema = require("./block/block.schema");
const chainSchema = require("./chain/chain.schema");
const followSchema = require("./follow/follow.schema");
const discussionsSchema = require("./discussions/discussions.schema");
const tagSchema = require("./tag/tag.schema");
const transactionSchema = require("./transaction/transaction.schema");
const voteSchema = require("./vote/vote.schema");

module.exports = reduce(concat, "", [
  accountSchema,
  blockSchema,
  chainSchema,
  followSchema,
  discussionsSchema,
  tagSchema,
  transactionSchema,
  voteSchema
]);
