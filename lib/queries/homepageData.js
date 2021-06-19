import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query Home {
    Home(id: "home") {
      _id
      title
      subtitle
      description
    }
    allProject {
      _id
      subtitle
      title
      tags
      slug {
        current
      }
      summary
      description
      image {
        asset {
          altText
          url
        }
      }
      links {
        _key
        title
        link
      }
      technologies
    }
  }
`;
