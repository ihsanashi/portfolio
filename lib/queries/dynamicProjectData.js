import { gql } from '@apollo/client';

export const PROJECT_DATA = gql`
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
        title
        link
      }
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
