import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Card {
  id: ID
  title: String
  description: String
  createdAt: String
  columnTitle: String
  }
  
  type Column {
  columnTitle: String
  cards: [Card]
  }
  
  input CardInput {
  title: String!
  description: String
  columnTitle: String
  }
  
  input ColumnInput {
  columnTitle: String!
  }
  
  input MoveCardInput {
  columnTitleFrom: String!
  columnTitleTo: String!
  cardId: ID!
  cardAfterId: ID
  }
  
  type Query {
    getColumns: [Column]
    getColumnTitles: [String]
    getCard(id: ID): Card
  }
  
  type Mutation {
    createCard(input: CardInput): Card 
    createColumn(input: ColumnInput): Column 
    moveCard(input: MoveCardInput): Card
  }
  
  
`);
