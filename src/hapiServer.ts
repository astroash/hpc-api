import { ApolloServer, gql } from 'apollo-server-hapi';
import * as Hapi from '@hapi/hapi';
import config from '../config';
import { createDbConnetion } from './dataProviders/postgres'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

async function StartServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  const server = new Hapi.server({
    port: config.httpPort
  });

  await apolloServer.applyMiddleware({
    app: server,
  });

  await apolloServer.installSubscriptionHandlers(server.listener);

  server.app.config = config;
  server.app.knex = await createDbConnetion();

  await server.start();
  console.log(`🚀 Server ready at http://localhost:4000`)
}

StartServer().catch(error => console.log(error));
