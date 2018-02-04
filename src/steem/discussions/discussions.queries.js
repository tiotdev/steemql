const client = require("../../client.js");
const steem = require("steem");
const moment = require("moment");

/**
 * Get discussions via dsteem
 * @param root
 * @param args
 * @returns {Promise<*>}
 */
const getDiscussions = async (root, args) => {
  const {
    by = "created",
    query: { tag = "", limit = 25, truncate = 0 } = {}
  } = args;
  const query = {
    tag: tag,
    limit: limit,
    truncate_body: truncate
  };
  const discussions = await client.database.getDiscussions(by, query);
  return discussions;
};

/**
 * Get discussions (posts) for an author.
 * @param root
 * @param args
 * @returns {Promise<*>}
 */
const getDiscussionsByAuthorBeforeDate = async (root, args) => {
  const {
    author,
    startPermlink = "",
    beforeDate = moment()
      .utc()
      .format("YYYY-MM-DD[T]HHmmss"),
    limit = 25
  } = args;
  const result = await steem.api.getDiscussionsByAuthorBeforeDateAsync(
    author,
    startPermlink,
    beforeDate,
    limit
  );
  return result;
};

/**
 * Get single post.
 * @param root
 * @param args
 * @returns {Promise<*>}
 */
const getContent = async (root, args) => {
  const { author, permlink } = args;
  const content = await steem.api.getContentAsync(author, permlink);
  return content;
};

const resolvers = {
  _getDiscussions: getDiscussions,
  _getDiscussionsByAuthorBeforeDate: getDiscussionsByAuthorBeforeDate,
  _getContent: getContent,

  //  Deprecated queries.
  getDiscussions: getDiscussions,
  getContent: getContent,
  getDiscussionsByAuthorBeforeDate: getDiscussionsByAuthorBeforeDate
};

module.exports = resolvers;
