const schema = `
  extend type Query {
    getFollowers(username: String!,startFollower: String, what: String, limit: Int): [Follower] 
  }
  
  type Follower {
    follower: String!
    following: String!
    what:[String]
  }
`;

module.exports = schema;
