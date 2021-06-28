import { gql } from '@apollo/client';

export const GET_SINGLE_PROJECT_DATA = gql`
  query Project($slug: String) {
    allProject(where: { slug: { current: { eq: $slug } } }) {
      _id
      subtitle
      title
      summary
      description
      bodyRaw
      slug {
        current
      }
      image {
        asset {
          url
        }
      }
      links {
        _key
        title
        link
      }
      tags
      completed
      startDate
      finishDate
      _updatedAt
      technologies
      relatedProjects {
        title
        slug {
          current
        }
      }
    }
  }
`;
