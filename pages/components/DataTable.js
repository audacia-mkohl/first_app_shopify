import React from 'react';
import {
    Card,
    Page,
    DataTable
  } from '@shopify/polaris';


function DataTableExample() {
    const rows = [
      ['gid://shopify/Order/4155091583046', 1003, "twilight glitter"],
      ['gid://shopify/Order/4153463799878', 1004, "aged night"],
      ['gid://shopify/Order/4153463439430', 1005, "autumn field"],
    ];
  
    return (
      <Page title="Orders Table">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'text',
            ]}
            headings={[
              'Orders ID',
              'Name',
              'Product Name',
            ]}
            rows={rows}
          />
        </Card>
      </Page>
    );
  }

  export default DataTableExample;