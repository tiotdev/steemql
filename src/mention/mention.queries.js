const rp = require("request-promise");

const resolvers = {
  /**
   * Search for mentions of users.
   * @param root
   * @param args
   * @returns {Promise<any>}
   */
  async mentions(root, args) {
    const { username, page = 1 } = args;

    const result = await rp(
      `https://api.asksteem.com/search?q="+\@${username}" -author:${username}` +
        `&sort_by=created&order=desc&pg=${page}`
    );
    return JSON.parse(result);
  }
};

module.exports = resolvers;
