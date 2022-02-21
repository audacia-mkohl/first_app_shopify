import gql from 'graphql-tag';

export const GET_ORDER = gql`
  query getOrders{
  orders(first: 5, reverse: true) {
    edges {
      node {
        id
        name
        displayFulfillmentStatus
        publication {
          id
          name
        }
        lineItems(first: 50) {
          edges {
            node {
              id
              title
              fulfillmentService {
                id
                location {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
