const concat = require("ramda").concat;
const reduce = require("ramda").reduce;

const accountSchema = require("./account/account.schema.js");
const postSchema = require("./post/post.schema.js");

// Define
const schema = `
  type Query {
    version: String 
  }
`;

// Concat all schemas and export. Use `reduce` to allow multiple params on
// `concat`.
module.exports = reduce(concat, "", [accountSchema, postSchema, schema]);
