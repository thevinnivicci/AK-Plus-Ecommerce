import request, { gql } from "graphql-request";

export const getProductLists = async () => {
  const query = gql`
    query ProductLists {
      productLists {
        createdAt
        id
        productDescription
        productName
        productPrice
        publishedAt
        updatedAt
        productImage {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clqqk3u1h4scv01ui6gwp6sau/master",
    query
  );
  return result;
};
