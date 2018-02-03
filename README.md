# GraphQL server for the steem blockchain

[steemQL](https://steemql.insteem.com) is a GraphQL server which aims to make interaction with the steem API as easy as possible. The goal is to have a unique API to get and push data from and to steem itself as well as from related 3rd party API's like SteemData, AskSteem etc. It will become a single endpoint for all steem data to make the integration and maintenance of different apps (e.g. web/mobile) a piece of cake.

### TechStack

* GraphQL server (graphql-yoga, nodejs)
* Used (steem related) libs/API's: dsteem, steemjs, asksteem.com, steemdata.com
* deployed on heroku: [test](https://steemql-test.herokuapp.com) and [live](https://steemql.insteem.com) server (ssl)

### Funtionality

* Mutations to create posts and comments, based on the steem API
* Convenient mutations to create posts/comments with the minimal parameters needed
* **Mentions** of any users.
* Gets Users/Accounts
* Get followers
* Get Posts (Discussions) by tag/sort
* Voting
* **Search** the steem blockchain, powered by [AskSteem](https://www.asksteem.com)

### Roadmap

* Query Transactions/Blocks
* Subscriptions for post/comment related queries, to use with GraphQL Clients like Apollo

### Contribution

Any kind of contribution is welcome, mainly feedback and feature requests.

GitHub: [steemQL](https://github.com/Insteem/steemql)

Discord: https://discord.gg/NgezG

steemit.chat: @sarasate

### Projects using steemQL:

* [Insteem](https://www.insteem.com) Web
* [Insteem App](https://exp.host/@sarasate/insteem) (React Native, available via Expo)

'Mentions' are already used by the [Insteem Web App](https://www.insteem.com), try it here: [https://www.insteem.com/mentions/@sarasate](https://www.insteem.com/mentions/@sarasate)
Will be available at the [mobile App](https://exp.host/@sarasate/insteem) soon.

Example query for steemQL:

```
{
  mentions(username: "sarasate") {
    results {
      author
      title
      type
      summary
    }
  }
}
```

Play with it: [steemQL Server](https://steemql.insteem.com). To get documentation for available queries, hit the green `Schema` button on the right.

![Screen Shot 2018-01-25 at 16.21.22.png](https://steemitimages.com/DQmekkgHJpi8jQSWfP2W8nzu3mAdk8vbSCcmG12DaWA2qnn/Screen%20Shot%202018-01-25%20at%2016.21.22.png)

If you're not familiar with GraphQL, [here](http://graphql.org) you go.
