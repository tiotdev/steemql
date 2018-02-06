const slugify = require("slugify");

/**
 * Creates a permlink for a new post.
 * @param title - The title of the post
 * @returns {string|*} -
 */
const createPermLink = title => {
  // Converting post title to a permlink.
  // Thanks to @good-karma, copied that from eSteem.
  var permlink;
  var t = new Date();
  var timeformat =
    t.getFullYear().toString() +
    (t.getMonth() + 1).toString() +
    t.getDate().toString() +
    "t" +
    t.getHours().toString() +
    t.getMinutes().toString() +
    t.getSeconds().toString() +
    t.getMilliseconds().toString() +
    "z";
  if (title && title.trim() !== "") {
    var s = slugify(title);
    permlink = s.toString() + "-" + timeformat;
    if (permlink.length > 255) {
      // STEEMIT_MAX_PERMLINK_LENGTH
      permlink = permlink.substring(permlink.length - 255, permlink.length);
    }
    // only letters numbers and dashes shall survive
    permlink = permlink.toLowerCase().replace(/[^a-z0-9-]+/g, "");
    return permlink;
  }
};

/**
 * Create array from 'tag' input field.
 * @param {string} tagString - A list of tags separated by a space (' ').
 * @returns {Array|*}
 */
const createTagArray = tagString => {
  return tagString.split(",");
};

const createJSONMetadata = data => {
  const json = {
    app: data.app || "steemQL",
    tags: data.tags,
    format: "markdown",
    community: "steemQL"
  };
  return JSON.stringify(json);
};

/**
 *  Parse the `json_metadata` property from steem.
 * @param json - string to parse into JSON format.
 */
const parseMetadata = json => {
  // Check if JSON string is not empty otherwise `parse` will fail.
  if (json.length > 0) {
    return JSON.parse(json);
  }
  return "";
};

module.exports = {
  createPermLink,
  createTagArray,
  createJSONMetadata,
  parseMetadata
};
