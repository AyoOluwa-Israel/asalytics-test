import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";
import { GET_ALL_ASSETS } from "../helpers/queries";

const API_URL: any = process.env.GRAPHQL_SERVER;

const graphQLClient = new GraphQLClient(API_URL);

export const getAllAsset = () => {
  return useQuery(["asset"], async () => {
    const { asalist } = await graphQLClient.request(GET_ALL_ASSETS);
    return asalist;
  });
};
