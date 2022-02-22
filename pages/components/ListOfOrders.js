import React from "react";
import { GET_ORDER } from "../Graphql/Queries";
import { useQuery } from 'react-apollo';
import {
  Card,
  List,
  DataTable 
} from '@shopify/polaris';

export default function ListOfOrder() {
    const { data, loading, error } = useQuery(GET_ORDER);
  
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  
    return (
      <div>
        <h1>Orders List</h1>
          <Card> 
            <div>
            
              {data.orders.edges.map((launch) => (
                
                //<p key={launch.node.id}>Order's id : {launch.node.id} || Order's Number : {launch.node.name} </p>,
                <List>
                  <br/>
                  <List key={launch.node.id}>{launch.node.id} &emsp; {launch.node.name} </List>
                  <br/>
                </List>
              ))}   
              
            </div>
          </Card>
      </div>
    );
  }
