import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query allPosts {
    allPost {
      _id
      subtitle
      title
      slug {
        current
      }
      cover {
        asset {
          url
          altText
        }
      }
      bodyRaw
      tags
      description
      category {
        _id
        title
        slug {
          current
        }
        description
      }
      publishedAt
      _updatedAt
    }
  }
`;
