const client = require("../../client.js");
const steem = require("steem");

const queries = {
  /**
   * Get Block.
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  _getBlock: async (root, args) => {
    const { blockNum } = args;
    const result = await client.database.getBlock(blockNum);
    return result;
  },
  _getBlockHeader: async (root, args) => {
    const { blockNum } = args;
    const result = await client.database.getBlockHeader(blockNum);
    return result;
  }
};

module.exports = queries;
