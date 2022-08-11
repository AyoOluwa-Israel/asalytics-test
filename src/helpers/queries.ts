import { gql } from "graphql-request";

export const GET_ALL_ASSETS = gql`
  query {
    asalist {
      results {
        available
        logo
        name
      }
    }
  }
`;
