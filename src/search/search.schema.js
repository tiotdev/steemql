const schema = `
  extend type Query {
    # Search powered by asksteem.com.
    # Returns a set of posts with limited properties.
    # One page (number of results) is limited to 10 entries by asksteem.com.
    search(query: String!, page: Int=1): Search
  }
  
  type Search {
    error: Boolean
    hits: Int 
    results: [Result]
  }
  
  type Result {
    created: String
    net_votes: Int 
    permlink: String
    type: String
    title: String
    tags: [String]
    summary: String
    children: Int
    author: String
  } 
`;

module.exports = schema;
