const schema = `
  extend type Query {
    _getFollowers(username: String!,startFollower: String, what: String, limit: Int): [_Follower] 
  }
  
  type _Follower {
    follower: String!
    following: String!
    what:[String]
  }
`;

module.exports = schema;
