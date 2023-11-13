import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schemas.js';
import rootValue from './persistance.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  rootValue,
}));

app.get('/', (req, res) => {
  res.status(200).json('Hi');
});

app.listen(5000, () => console.log('Listening'));
