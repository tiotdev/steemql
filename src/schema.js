const concat = require("ramda").concat;
const reduce = require("ramda").reduce;

const accountSchema = require("./account/account.schema.js");
const postSchema = require("./post/post.schema.js");
const searchSchema = require("./search/search.schema");
const transactionSchema = require("./transaction/transaction.schema");
const voteSchema = require("./vote/vote.schema");

// Define
const schema = `
  type Query {
    version: String 
  }
  
  type Mutation {
    log(text: String!): String
  }
`;

// Concat all schemas and export. Use `reduce` to allow multiple params on
// `concat`.
module.exports = reduce(concat, "", [
  accountSchema,
  postSchema,
  searchSchema,
  transactionSchema,
  voteSchema,
  schema
]);
