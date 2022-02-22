import React from "react";
import gql from 'graphql-tag';
import { GET_ORDER } from "../Graphql/Queries";
import { useQuery } from 'react-apollo';

const GET_ORDER_2 = gql`
query getOrders {
  orders(first: 5, reverse: true) {
    edges {
      node {
        id
        name
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


export default function ListOfOrder() {
    const { data, loading, error } = useQuery(GET_ORDER);
  
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  
    return (
      <div>
        <h1>SpaceX Launches</h1>
        <ul>
          {data.orders.edges.map((launch) => (
            <li key={launch.node.id}>{launch.node.name} // {launch.node.id} </li>
          ))}
        </ul>
      </div>
    );
  }
