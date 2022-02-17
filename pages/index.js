import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Page, Layout, List, Card } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from './components/ResourceList';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {
    // A constant that defines your app's empty state
    const emptyState = !store.get('ids');
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
      </Page>
    );
  }
}

export default Index;
