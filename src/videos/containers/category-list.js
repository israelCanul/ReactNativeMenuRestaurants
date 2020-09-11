import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separador from '../../sections/components/horizontalSeparator';
import Category from '../components/category';

class CategoryList extends Component {
  renderEmpty() {
    return <Empty text="No hay sugerencias"></Empty>;
  }
  renderItemSeparator() {
    return <Separador></Separador>;
  }
  renderItem({item}) {
    return <Category {...item}></Category>;
  }
  keyExtractor(item) {
    return item.id.toString();
  }
  render() {
    console.log(this.props.list);
    return (
      <Layout title="Categorias">
        <FlatList
          data={this.props.list}
          horizontal={true}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderItemSeparator}></FlatList>
      </Layout>
    );
  }
}
export default CategoryList;
