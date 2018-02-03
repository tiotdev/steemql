const client = require("../../client");
const PrivateKey = require("dsteem").PrivateKey;

const mutations = {
  /**
   * Vote on posts or comments.
   * @param root
   * @param args
   * @returns {Promise.<*|Promise|Promise<"dsteem/steem/transaction".TransactionConfirmation>>}
   */
  async _vote(root, args) {
    const { vote, key } = args;
    const result = client.broadcast.vote(vote, PrivateKey.from(key));
    return result;
  }
};

module.exports = mutations;
