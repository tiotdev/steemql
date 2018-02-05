const concat = require("ramda").concat;
const reduce = require("ramda").reduce;

const userSchema = require("./user/user.schema");
const postSchema = require("./post/post.schema");
const searchSchema = require("./search/search.schema");
const mentionSchema = require("./mention/mention.schema");

const steemSchema = require("./steem/schema");

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
  mentionSchema,
  postSchema,
  searchSchema,
  userSchema,
  // Default global schema
  schema,
  // Standard steem api schema
  steemSchema
]);
