import { gql } from '@apollo/client';

export const GET_HOMEPAGE_DATA = gql`
  query homepage {
    About(id: "about") {
      homeSummaryRaw
    }
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
