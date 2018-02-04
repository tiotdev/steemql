const client = require("../../client.js");
const steem = require("steem");
const PrivateKey = require("dsteem").PrivateKey;

const mutations = {
  _updateAccount: async (root, args) => {
    const { account, active, json_metadata, memo_key, key } = args;

    const data = {
      account: account,
      json_metadata: json_metadata,
      memo_key: memo_key
    };

    console.log(data);
    const result = await client.broadcast.updateAccount(
      data,
      PrivateKey.from(key)
    );
    console.log(result);
    return result;
  }
};

module.exports = mutations;
