import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema.js';
import resolvers from './resolver.js';



// ******************* Start Apollo Server ************************
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});
console.log(`🚀 Server ready at: ${url}`);

// ******************* End Apollo Server **************************
