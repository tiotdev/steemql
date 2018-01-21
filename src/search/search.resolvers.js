const rp = require("request-promise");

const resolvers = {
  async search(root, args) {
    const { query, page = 1 } = args;

    const result = await rp(
      `https://api.asksteem.com/search?q=${query}&sort_by=created&order=desc&pg=${page}`
    );
    return JSON.parse(result);
  }
};

module.exports = resolvers;
