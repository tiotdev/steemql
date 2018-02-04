const client = require("../../client.js");
const steem = require("steem");

const queries = {
  _getChainProperties: async () => {
    const result = await client.database.getChainProperties();
    console.log(result);
    return result;
  }
};

module.exports = queries;
