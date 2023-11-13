import { gql } from '@apollo/client';

export const GET_COLUMNS = gql`
  query {
  getColumns {
    columnTitle, cards {
      id, title,createdAt, description, columnTitle
    }, 
  }
}
`;

export const GET_COLUMN_TITLES = gql`
  query {
  getColumns {
    columnTitle
  }
}
`;
