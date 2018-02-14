const client = require("../client");
const steem = require("steem");
const { head, propOr } = require("ramda");
const { parseMetadata } = require("../helpers/helpers");

const Post = {
  /**
   * Get a user for a post.
   * @param root
   * @param args
   * @returns {Promise<void>}
   */
  user: async (root, args) => {
    const { author } = root;
    const result = await client.database.getAccounts([author]);
    return head(result);
  },
  /**
   * Get votes for the post.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  votes: async (root, args) => {
    const { author, permlink } = root;
    const result = await steem.api.getActiveVotesAsync(author, permlink);
    return result;
  },

  /**
   * Get tags from `json_metadata` object.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  tags: async (root, args) => {
    const { json_metadata } = root;
    const tags = propOr(null, "tags", parseMetadata(json_metadata));
    return tags;
  },
  /**
   * Extract images from `json_metadata.image`.
   * @param root
   * @returns {Promise<*>}
   */
  images: async root => {
    const { json_metadata } = root;
    const images = parseMetadata(json_metadata).image;
    return images;
  },
  /**
   * Get format of the post (markdown, html).
   * @param root
   * @returns {Promise<void>}
   */
  format: async root => {
    const { json_metadata } = root;
    const format = propOr(null, "format", parseMetadata(json_metadata));
    return format;
  },
  /**
   * Returns the app where the post has been created.
   * @param root
   * @returns {Promise<void>}
   */
  app: async root => {
    const { json_metadata } = root;
    console.log(json_metadata);
    const app = propOr(null, "app", parseMetadata(json_metadata));
    return app;
  }
};

module.exports = { Post };
