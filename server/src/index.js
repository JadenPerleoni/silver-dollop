const { ApolloServer, gql, PubSub } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { getUserId } = require("./util");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const pubsub = new PubSub();

const resolvers = {
  Query,
  Mutation,
};

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
