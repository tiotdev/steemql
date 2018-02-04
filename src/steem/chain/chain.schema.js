const schema = `
  extend type Query {
    # Return median chain properties decided by witnesses.
    _getChainProperties: _ChainProperties 
  }
  
  type _ChainProperties {
    account_creation_fee: String
    maximum_block_size: Int
    sbd_interest_rate: Int
  }
`;

module.exports = schema;
