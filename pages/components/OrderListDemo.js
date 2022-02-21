import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Card,
  ResourceList,
  TextStyle,
  ResourceItem,
  Avatar
} from '@shopify/polaris';
import { Context } from '@shopify/app-bridge-react';

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
  
        return (
            <Query query={GET_ORDERS}>
              {({ data, loading, error, refetch }) => { // Refetches products by ID
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;
    
                return (
                  <>
                    <Card>
                      <ResourceList
                        resourceName={{singular: 'customer', plural: 'customers'}}
                        items={[
                          {
                            id: 100,
                            url: 'customers/341',
                            name: 'Mae Jemison',
                            location: 'Decatur, USA',
                          },
                          {
                            id: 200,
                            url: 'customers/256',
                            name: 'Ellen Ochoa',
                            location: 'Los Angeles, USA',
                          },
                        ]}
                        renderItem={(item) => {
                          const {id, url, name, location} = item;
                          const media = <Avatar customer size="medium" name={name} />;

                          return (
                            <ResourceItem
                              id={id}
                              url={url}
                              media={media}
                              accessibilityLabel={`View details for ${name}`}
                            >
                              <h3>
                                <TextStyle variation="strong">{name}</TextStyle>
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