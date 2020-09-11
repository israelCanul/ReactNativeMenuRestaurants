import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separador from '../components/verticalseparator-list';
import Suggestion from '../components/suggestions';

class SuggestionList extends Component {
  renderEmpty() {
    return <Empty text="No hay sugerencias"></Empty>;
  }
  renderItemSeparator() {
    return <Separador></Separador>;
  }
  renderItem({item}) {
    return <Suggestion {...item}></Suggestion>;
  }
  keyExtractor(item) {
    return item.id.toString();
  }
  render() {
    const list = [
      {title: 'Avengers', key: '1'},
      {title: 'puchamon', key: '2'},
    ];
    return (
      <Layout title="Sugerencias para ti">
        <FlatList
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderItemSeparator}></FlatList>
      </Layout>
    );
  }
}
export default SuggestionList;
