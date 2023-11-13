import { gql } from '@apollo/client';

export const MOVE_CARD = gql`
  mutation moveCard($input: MoveCardInput) {
    moveCard(input: $input){id, title}
  }
`;

export const CREATE_COLUMN = gql`
  mutation createColumn($input: ColumnInput) {
    createColumn(input: $input){columnTitle}
  }
`;

export const CREATE_CARD = gql`
  mutation createCard($input: CardInput) {
    createCard(input: $input){title}
  }
`;
