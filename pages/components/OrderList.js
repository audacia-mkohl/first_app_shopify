import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Card,
  ResourceList,
  TextStyle,
  Thumbnail,
  ResourceItem
} from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import { node } from 'webpack';

// GraphQL query that retrieves orders by ID

const GET_ORDERS_BY_ID = gql`
  query getOrders($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Orders {
        id
        orders(first:1){
          edges{
                node{
                  id
                  name
                }
            }
        }
      }
    }
  }
`;


const GET_ORDERS = gql`
    query getOrders{
      orders(first:1){
          edges{
              node{
                id
                name
              }
          }
      }
}
`;

class ResourceListWithOrers extends React.Component {
    static contextType = Context;
  
    // A constructor that defines selected items and nodes
    constructor(props) {
      super(props);
      this.state = {
        selectedItems: [],
        selectedNodes: {},
      };
    }

    render() {
        const app = this.context;
    
        // Returns products by ID
        return (
            <Query query={GET_ORDERS_BY_ID} variables={{ ids: store.get('ids') }}>
              {({ data, loading, error, refetch }) => { // Refetches products by ID
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;

                const nodesById = {};
                data.nodes.forEach(node => nodesById[node.id] = node);
    
                return (
                  <>
                    <Card>
                    <ResourceList
                      resourceName={{singular: 'order', plural: 'orders'}}
                      items={data.nodes}
                      renderItem={item => {
                        const media = (
                          <Thumbnail
                            source={
                              item.images.edges[0]
                                ? item.orders.edges[0].node.id
                                : ''
                            }
                            alt={
                              item.images.edges[0]
                                ? item.orders.edges[0].node.name
                                : ''
                            }
                          />
                        );

                        return (
                          <ResourceItem
                            id={id}
                            media={media}
                            accessibilityLabel={`View details for ${item.name}`}
                          >
                            <h3>
                              <TextStyle variation="strong">{item.name}</TextStyle>
                            </h3>
                            <div>{location}</div>
                          </ResourceItem>
                        );
                      }}
                    />
                  </Card>
                </>
              );
            }}
          </Query>
        );
      }
    }

export default ResourceListWithOrers;