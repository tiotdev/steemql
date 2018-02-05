const client = require("../client");

const User = {
  // TODO: Move function into reusable module.
  posts: async (root, args) => {
    const { name } = root;
    const {
      query: {
        limit = 25,
        start_author = "",
        start_permlink = "",
        truncate_body = 0
      }
    } = args;
    const by = "blog";
    const query = {
      tag: name,
      limit: limit,
      start_author: start_author,
      start_permlink: start_permlink,
      truncate_body: truncate_body
    };
    const result = await client.database.getDiscussions(by, query);
    return result;
  }
};

const Profile = {};

module.exports = { User, Profile };
