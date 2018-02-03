const schema = `
  extend type Query {
    # Get votes for account & permlink.
    _getActiveVotes(author: String!, permlink: String!): [_Vote]
  }
  extend type Mutation {
    # Vote for a post/comment
    _vote(vote: _VoteInput!, key: String!): _TransactionConfirmation
  }
  
  type _Vote {
    voter: String
    weight: String
    rshares: String
    percent: Int
    reputation: String
    time: String 
  }
  
  input _VoteInput {
    author: String!
    permlink: String!
    voter: String!
    # Voting weight: 100%: 10000 (default), 50%: 50000
    weight: Int!
  }
`;

module.exports = schema;
