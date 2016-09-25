import express from 'express';

import Schema from './data/schema';
import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
import Connectors from './data/connectors';

import bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const PORT = 3000;
const app = express();

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), apolloExpress({ schema: myGraphQLSchema }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
