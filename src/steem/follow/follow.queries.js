const steem = require("steem");

const resolvers = {
  /**
   * Get followers of a user.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  async _getFollowers(root, args) {
    const { username, startFollower, what = "blog", limit = 50 } = args;
    const followers = await steem.api.getFollowersAsync(
      username,
      startFollower,
      what,
      limit
    );
    return followers;
  }
};

module.exports = resolvers;
