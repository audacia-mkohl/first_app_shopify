import React from 'react';
import { GET_ORDER } from "../Graphql/Queries";
import { useQuery } from 'react-apollo';
import {
    Card,
    Page,
    DataTable
  } from '@shopify/polaris';


function DataTableExample() {
  const { data, loading, error } = useQuery(GET_ORDER);

    
    const rows = [
      ['gid://shopify/Order/4155091583046', "1003"],
      ['gid://shopify/Order/4153463799878', "1004"],
      ['gid://shopify/Order/4153463439430', "1005"],
    ];

  
    return (
      <div>
        <Page title="Orders Table">
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'text',
              ]}
              headings={[
                'Orders ID',
                'Name',
              ]}
              rows={rows}
            />
          </Card>
        </Page>
      </div>
    );
  }

  export default DataTableExample;