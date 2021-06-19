import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query Home {
    Home(id: "home") {
      _id
      title
      subtitle
      description
    }
  }
`;
