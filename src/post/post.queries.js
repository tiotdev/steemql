const client = require("../client");

const { posts } = require("./post.methods");

const queries = {
  posts: (root, args) => posts(root, args),
  post: async (root, args) => {
    const result =await posts(root, {
      ...args,
      by: "blog",
      query: { tag: args.username, limit: 1 }
    });
    console.log(result);
    return result[0];
  }
};

module.exports = queries;
