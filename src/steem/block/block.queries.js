const client = require("../../client.js");
const steem = require("steem");

const queries = {
  _getBlock: async (root, args) => {
    const { blockNum } = args;
    const result = await client.database.getBlock(blockNum);
    console.log(result);
    return result;
  }
};

module.exports = queries;
