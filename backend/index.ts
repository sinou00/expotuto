import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Define the type definitions (schema)
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    image: String!
  }

  type Squad {
    id: ID!
    title: String!
    users: [User!]!
    imageUsers: [String!]!
    adminId: ID!
  }

  type Query {
    squads: [Squad!]!
  }
`;

// Create the schema
const schema = makeExecutableSchema({ typeDefs });

// Define the mock data
const mocks = {
  Query: () => ({
    squads: () => [
      {
        id: '1',
        title: 'Golden State Warriors',
        users: [
          { id: '1', name: 'Stephen Curry', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
          { id: '2', name: 'Klay Thompson', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
          { id: '3', name: 'Draymond Green', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
        ],
        imageUsers: [
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
        ],
        adminId: '1',
      },
      {
        id: '2',
        title: 'Los Angeles Lakers',
        users: [
          { id: '1', name: 'LeBron James', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
          { id: '2', name: 'Anthony Davis', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
          { id: '3', name: 'Russell Westbrook', image: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg' },
        ],
        imageUsers: [
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
        ],
        adminId: '2',
      },
    ],
  }),
};


// Apply mocks to the schema
const mockedSchema = addMocksToSchema({ schema, mocks });

// Create the Apollo Server
const server = new ApolloServer({
  schema: mockedSchema,
});

// Start the server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});





