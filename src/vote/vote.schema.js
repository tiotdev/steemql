const schema = `
  extend type Query {
    # Get votes for account & permlink.
    activeVotes(author: String!, permlink: String!): [Vote]
  }
  
  extend type Mutation {
    # Vote for a post/comment
    vote(vote: VoteInput!, key: String!): _TransactionConfirmation
  }
  
  type Vote {
    # Username of the voter
    voter: String!
    weight: String!
    rshares: String
    percent: Int!
    reputation: String
    time: String!
    user: User
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
