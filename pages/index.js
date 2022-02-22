import React from 'react';
import { Page } from "@shopify/polaris";
import DataTableExample from './components/DataTable';
import ListOfOrder from './components/ListOfOrders';

class Index extends React.Component {
  state = { open: false };
  render() {

    return (
      <Page>
        <DataTableExample/>
        <ListOfOrder/>
      </Page>
    );
  }
}

export default Index;
