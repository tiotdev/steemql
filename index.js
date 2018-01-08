const { GraphQLServer } = require("graphql-yoga");
const { Client } = require("dsteem");

const client = new Client("https://api.steemit.com");

const typeDefs = `
  type Query {
    account(username: String!): Account 
  }
  type Account {
    name: String! 
  }
`;

const resolvers = {
  Query: {
    account: async (root, args) => {
      const res = await client.database.getAccounts([args.username]);
      return res[0];
    }
  }
};

const options = { port: process.env.PORT || 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
