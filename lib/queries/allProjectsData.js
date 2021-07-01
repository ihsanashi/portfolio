import { gql } from '@apollo/client';

export const GET_PROJECTS_DATA = gql`
  query allProjects {
    allProject(sort: { title: ASC }) {
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
