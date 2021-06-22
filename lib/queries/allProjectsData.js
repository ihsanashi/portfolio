import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query allProjects {
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
