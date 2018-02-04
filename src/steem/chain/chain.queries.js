const client = require("../../client.js");
const steem = require("steem");

const queries = {
  /**
   * Chain properties that are decided by the witnesses.
   * @returns {Promise<*>}
   */
  _getChainProperties: async () => {
    const result = await client.database.getChainProperties();
    return result;
  },
  /**
   * Get chain config
   * @returns {Promise<*>}
   */
  _getConfig: async () => {
    const result = await client.database.getConfig();
    return result;
  },
  /**
   * Return median price in SBD for 1 STEEM as reported by the witnesses.
   * @returns {Promise<*>}
   */
  _getCurrentMedianHistoryPrice: async () => {
    const result = await client.database.getCurrentMedianHistoryPrice();
    return result;
  },
  /**
   * Return state of server.
   * @returns {Promise<*>}
   */
  _getDynamicGlobalProperties: async () => {
    const result = await client.database.getDynamicGlobalProperties();
    return result;
  }
};

module.exports = queries;
