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
  },
  /**
   * Return all applied operations in blockNum.
   * @returns {Promise<*>}
   */
  _getOperations: async (root, args) => {
    const { blockNum, onlyVirtual = false } = args;
    const result = await client.database.getOperations(blockNum, onlyVirtual);
    return result;
  },
  /**
   * Get state for a specific path.
   * @param root
   * @param args
   * @returns {Promise<Promise<any> | *>}
   */
  _getState: async (root, args) => {
    const { path } = args;
    const result = await client.database.getState();
    return result;
  },
  /**
   * Get list of delegations made by account. Default limit: 50
   * @param root
   * @param args
   * @returns {Promise<*>}
   */
  _getVestingDelegations: async (root, args) => {
    const { account, from = "", limit = 50 } = args;
    const result = await client.database.getVestingDelegations(
      account,
      from,
      limit
    );
    return result;
  },
  _getHardforkVersion: async () => {
    return steem.api.getHardforkVersionAsync();
  }
};

module.exports = queries;
