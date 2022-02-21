import React from 'react';
import { Page, Layout, List, Card } from "@shopify/polaris";
import ResourceListWithOrers from './components/OrderListDemo';
import DataTableExample from './components/DataTable';
import ListOfOrder from './components/ListOfOrders';

class Index extends React.Component {
  state = { open: false };
  render() {

    return (
      <Page
      title='Orders Tag'
      >
        <Layout>
          <Layout.Section oneHalf>
            <Card title="Orders list" sectioned>
              <List type="number">
                <List.Item>First item</List.Item>
                <List.Item>Second item</List.Item>
                <List.Item>Third Item</List.Item>
              </List>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card title="Orders list" sectioned>
              <List type="number">
                <List.Item>First item</List.Item>
                <List.Item>Second item</List.Item>
                <List.Item>Third Item</List.Item>
              </List>
            </Card>
          </Layout.Section>
        </Layout>
        <br/>
        <ResourceListWithOrers/>
        <DataTableExample/>
        <ListOfOrder/>
      </Page>
    );
  }
}

export default Index;
