const schema = `
  extend type Query {
    # Get block :: dsteem
    _getBlock(blockNum: Int!): _SignedBlock
    # Get block header
    _getBlockHeader(blockNum: Int!): _BlockHeader
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
  
  type _BlockHeader {
    extensions: [String] 
    previous: String
    timestamp: String
    transaction_merkle_root: String
    witness: String
  }
`;

module.exports = schema;
