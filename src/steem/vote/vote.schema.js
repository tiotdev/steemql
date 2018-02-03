const schema = `
  extend type Mutation {
    # Vote for a post/comment
    _vote(vote: _VoteInput!, key: String!): _TransactionConfirmation
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
