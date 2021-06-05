import gql from "graphql-tag";

export const GET_PAGINATED_FILTERED_CHARACTERS = gql`
  query ($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
      results {
        name
        id
        image
        gender
        species
        episode {
          name
          air_date
        }
      }
    }
  }
`;
