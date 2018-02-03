const schema = `
extend type Query {
  # Get discussions :: steem
  _getDiscussions(by: String, query: _DiscussionQuery): [_Discussion] 
  # Get discussions for author :: steem
  _getDiscussionsByAuthorBeforeDate(author: String!, startPermlink: String, beforeDate: String, limit: Int): [_Discussion]
  # Get content :: steem
  _getContent(author: String!,permlink: String): _Discussion

  # Get a list of posts/comments.
  getDiscussions(by: String, query: _DiscussionQuery): [_Discussion] 
  @deprecated(reason: "Moved to prefixed version")
  # Get posts for author. Default limit: 25.
  getDiscussionsByAuthorBeforeDate(author: String!, startPermlink: String, beforeDate: String, limit: Int): [_Discussion]
  @deprecated(reason: "Moved to prefixed version ('steemGet...')")
  # Get a single post or comment by author.
  getContent(author: String!,permlink: String): _Discussion
  @deprecated(reason: "Moved to prefixed version")
}

extend type Mutation {
  # Create post or comment::dsteem
  _comment(comment: _CommentInput!, key: String!): _TransactionConfirmation
  # Comment with options::dsteem
  _commentWithOptions(comment: _CommentInput!, options: _CommentOptions!, key: String!): _TransactionConfirmation 
}
  
type _Discussion {
  id: ID 
  author: String
  permlink: String
  category: String
  parent_author: String
  parent_permlink: String
  title: String
  body: String
  json_metadata: String 
  last_update: String
  created: String
  active: String
  last_payout: String
  depth: Int
  children: Int
  net_rshares: Int
  abs_rshares: Int
  vote_rshares: Int
  children_abs_rshares: Int
  cashout_time: String
  max_cashout_time: String
  total_vote_weight: Int
  reward_weight: Int
  total_payout_value: String
  curator_payout_value: String
  author_rewards: Int
  net_votes: Int
  root_comment: Int
  max_accepted_payout: String
  percent_steem_dollars: Int
  allow_replies: Boolean
  allow_votes: Boolean
  allow_curation_rewards: Boolean
  url: String
  root_title: String
  pending_payout_value: String
  total_pending_payout_value: String
  author_reputation: String
  promoted: String
  body_length: Int
  beneficiaries: [_Beneficiary]
}

type _Beneficiary {
  account: String!
  weight: Int!
}
 
# Defined by the steem API
input _CommentInput {
  author: String!
  body: String!
  json_metadata: String!
  parent_author: String!
  parent_permlink: String!
  permlink: String!
  title: String!
  }
  
# Defined by the steem API
input _CommentOptions {
  allow_curation_rewards: Boolean
  allow_votes: Boolean
  author: String
  extensions: [_ExtensionInput] 
  max_accepted_payout: String
  percent_steem_dollars: Int
  permlink: String
}

input _ExtensionInput {
  account: String!
  weight: Int!
}

input _DiscussionQuery {
  tag: String,
  limit: Int,
  truncate: Int
 }
`;

module.exports = schema;
