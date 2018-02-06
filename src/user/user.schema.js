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
    created: String!
    reputation: String
    post_count: Int
    memo_key: String
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
  
  input PostQuery {
    tag: String
    limit: Int
    start_author: String
    start_permlink: String
    truncate_body: Int
  }
`;

module.exports = schema;
