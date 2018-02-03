const schema = `
  extend type Query {
    # Trending Tags :: steemjs
    _getTrendingTags(afterTag: String, limit: Int): [_TrendingTag] 
  }
  
  type _TrendingTag {
   name: String!
   total_payouts: String
   net_votes: Int
   top_posts: Int
   comments: Int
   trending: String  
  }
`;

module.exports = schema;
