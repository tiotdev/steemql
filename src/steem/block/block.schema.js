const schema = `
  extend type Query {
    # Get block :: dsteem
    _getBlock(blockNum: Int): _SignedBlock
  } 
  
  type _SignedBlock {
    block_id: String!
    extensions: [String]
    previous: String
    signing_key: String
    timestamp: String
    transaction_ids: [String]
    transaction_merkle_root: String
    transations: [_Transaction]
    witness: String
    witness_signature: String 
  }
`;

module.exports = schema;
