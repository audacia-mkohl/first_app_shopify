import React from 'react';
import { Page } from "@shopify/polaris";
import DataTableExample from './components/DataTable';
import ListOfOrder from './components/ListOfOrders';

class Index extends React.Component {

  render(){
    return(
      <Page>        
        <ListOfOrder/>
        <DataTableExample/>
      </Page>
    );
  }
}

export default Index;


