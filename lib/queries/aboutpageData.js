import { gql } from '@apollo/client';

export const GET_ABOUT_DATA = gql`
  query About {
    About(id: "about") {
      _updatedAt
      title
      homeSummaryRaw
      excerptRaw
      personalBodyRaw
      description
      workExperience {
        _key
        jobTitle
        employer
        employmentType
        location
        isCurrentJob
        startDate
        finishDate
        description
      }
      skills {
        _key
        title
      }
    }
  }
`;
