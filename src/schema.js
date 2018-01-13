const schema = `
  type Query {
    account(username: String!): Account 
    getAccounts(usernames: [String]!): [Account]
    getDiscussions(by: String, query: DiscussionQuery): [Discussion] 
  }
 type Account {
 id: ID!
    name: String! 
    witness_votes: [String]
    memo_key: String
    json_metadata: String
    proxy: String
    last_owner_update: String
    last_account_update: String
    created: String
    mined: Boolean
    owner_challenged: Boolean
    active_challenged: Boolean
    last_owner_proved: String
    last_active_proved: String
    recovery_account: String
    last_account_recovery: String
    reset_account: String
    comment_count: Int 
    lifetime_vote_count: Int
    post_count: Int
    can_vote: Boolean
    voting_power: Int
    last_vote_time: String
    balance: String
    savings_balance: String
    sbd_balance: String
    sbd_seconds: String
    sbd_seconds_last_update: String
    sbd_last_interest_payment: String
    savings_sbd_balance: String
    savings_sbd_seconds: String
    savings_sbd_seconds_last_update: String
    savings_sbd_last_interest_payment: String
    savings_withdraw_requests: Int
    reward_sbd_balance: String
    reward_steem_balance: String
    reward_vesting_balance: String
    reward_vesting_steem: String
    vesting_shares: String
    delegated_vesting_shares: String
    received_vesting_shares: String
    vesting_withdraw_rate: String
    next_vesting_withdrawal: String
    withdrawn: Int 
    to_withdraw: Int 
    withdraw_routes: Int
    curation_rewards: Int 
    posting_rewards: Int
    proxied_vsf_votes: [Int] 
    witnesses_voted_for: Int 
    average_bandwidth: String
    lifetime_bandwidth: String
    last_bandwidth_update: String
    average_market_bandwidth: String 
    lifetime_market_bandwidth: String 
    last_market_bandwidth_update: String
    last_post: String
    last_root_post: String
    vesting_balance: String
    reputation: String 
 } 
 
 type Discussion {
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
 }
 
 input DiscussionQuery {
    tag: String,
    limit: Int,
    truncate: Int
 }
`;

module.exports = schema;
