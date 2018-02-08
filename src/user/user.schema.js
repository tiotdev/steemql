const schema = `
  extend type Query {
    # Get user 
    user(username: String!): User
    # Get multiple users
    users(usernames: [String!]!): [User]
  
    # Get a single account by 'username'.
    account(username: String!): _Account 
    @deprecated(reason: "Renamed to User")
  }
  
  type User {
    id: ID!
    name: String!
    balance: String
    created: String!
    json_metadata: String
    last_post: String
    last_root_post: String
    memo_key: String
    post_count: Int
    reputation: String
    savings_balance: String
    sbd_balance: String
    vesting_balance: String
    vesting_shares: String
    voting_power: Int
    profile: Profile
    posts(by: String, query: PostQuery): [Post]
  }
  
  type Profile {
    about: String
    cover_image: String
    location: String
    name: String
    profile_image: String
    website: String
  }
  
  type FollowCount {
    account: String!
    follower_count: Int!
    following_count: Int!
  }
`;

module.exports = schema;
