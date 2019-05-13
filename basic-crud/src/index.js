const { GraphQLServer } = require('graphql-yoga');

const Query = require('../src/resolvers/Query');
const Mutation = require('../src/resolvers/Mutation');

global.courses = [{ id: 1, author: 'Wes', name: 'Learn Node' }];
global.idCount = global.courses.length;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
});

server.start(() => console.log('Server is listening on port 4000'));
