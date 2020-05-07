
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import resolvers from './graphql/resolvers'
import dotenv from 'dotenv'
import authHelper from './helpers/authHelper';
import mongoHelper from './helpers/mongoHelper';

dotenv.config()
mongoHelper()


const typeDefs = importSchema('./graphql/schema.graphql')
const server = new ApolloServer({
    typeDefs:typeDefs, 
    resolvers: resolvers,
    context: authHelper,
});
server.listen(process.env.SERVER_PORT)
    .then(() => console.log(`Server started on port: ${process.env.SERVER_PORT}`));
