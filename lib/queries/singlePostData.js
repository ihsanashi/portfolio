import { gql } from '@apollo/client';

export const GET_SINGLE_POST = gql`
  query Post($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
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
