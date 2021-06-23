import { gql } from '@apollo/client';

export const GET_ABOUT = gql`
  query About {
    About(id: "about") {
      _updatedAt
      excerptRaw
      bodyRaw
      description
    }
  }
`;
