import React from "react";
import { GET_ORDER } from "../Graphql/Queries";
import { useQuery } from 'react-apollo';
import {
  Card,
  Layout,
  List,
  Page
} from '@shopify/polaris';


export default function ListOfOrder() {
    const { data, loading, error } = useQuery(GET_ORDER);
     
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
      <Page title="Orders Table">
        <Layout>
          <Layout.Section>
            <Card> 
                <div>
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>ID</th>
                      <th>FULFILLMENT STATUS</th>
                    </tr>
                  </thead>
                  {data.orders.edges.map((launch) => (
                    //<p key={launch.node.id}>Order's id : {launch.node.id} || Order's Number : {launch.node.name} </p>
                    <tbody>
                    <tr>
                      <td>&emsp; {launch.node.name} &emsp;</td>
                      <td>&emsp; {launch.node.id} &emsp;</td>
                      <td>&emsp; {launch.node.displayFulfillmentStatus} &emsp;</td>
                      <td>&emsp; {launch.node.name} &emsp;</td>
                      <td>&emsp; {launch.node.name} &emsp;</td>
                    </tr>
                    </tbody>
                  ))}  
                  </table> 
                </div>       
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
