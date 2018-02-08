const client = require("../client");
const { isEmpty } = require("ramda");

const posts = async (root, args) => {
  const { by = "created" } = args;
  // Get `query` param. Can be empty, assign defaults.
  const {
    query: {
      tag = "new",
      limit = 25,
      start_author = "",
      start_permlink = "",
      truncate_body = 0
    } = {}
  } = args;
  const query = {
    tag: tag,
    limit: limit,
    start_author: start_author,
    start_permlink: start_permlink,
    truncate_body: truncate_body
  };

  console.log(query);

  // Remove unused props.
  isEmpty(start_author) ? delete query.start_author : null;
  isEmpty(start_permlink) ? delete query.start_permlink : null;

  const result = await client.database.getDiscussions(by, query);
  console.log(result);
  return result;
};

module.exports = { posts };
