const { GraphQLServer } = require("graphql-yoga");

const schema = require("./src/schema.js");
const resolvers = require("./src/resolvers.js");

const typeDefs = schema;

// Port from .env (e.g. Heroku) or fixed.
const options = { port: process.env.PORT || 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
