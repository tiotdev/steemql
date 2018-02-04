const client = require("../../client.js");
const steem = require("steem");

const queries = {
  /**
   * Chain roperties that are decided by the witnesses.
   * @returns {Promise<*>}
   */
  _getChainProperties: async () => {
    const result = await client.database.getChainProperties();
    return result;
  },
  _getConfig: async () => {
    const result = await client.database.getConfig();
    return result;
  }
};

module.exports = queries;
