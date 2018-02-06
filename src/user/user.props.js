const client = require("../client");
const { parseMetadata } = require("../helpers/helpers");
const { propOr } = require("ramda");

const User = {
  // TODO: Move function into reusable module.
  posts: async (root, args) => {
    const { name } = root,
      by = "blog";
    let { query = {} } = args;
    const {
      limit = 25,
      start_author = "",
      start_permlink = "",
      truncate_body = 0
    } = query;
    query = {
      tag: name,
      limit: limit,
      start_author: start_author,
      start_permlink: start_permlink,
      truncate_body: truncate_body
    };
    const result = await client.database.getDiscussions(by, query);
    return result;
  },
  profile: async root => {
    const { json_metadata } = root;

    const metadata = parseMetadata(json_metadata);

    return propOr(null, "profile", metadata);
  }
};

const Profile = {};

module.exports = { User, Profile };
