import { gql } from '@apollo/client';

export const GET_CONTACT_DATA = gql`
  query Contact {
    Contact(id: "contact") {
      _id
      title
      description
    }
  }
`;
