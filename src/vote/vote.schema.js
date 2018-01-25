const schema = `
  extend type Mutation {
    # Vote for a post/comment
    vote(vote: VoteInput!, key: String!): TransactionConfirmation
  }
  
  input VoteInput {
    author: String!
    permlink: String!
    voter: String!
    # Voting weight: 100%: 10000 (default), 50%: 50000
    weight: Int!
  }
`;

module.exports = schema;
