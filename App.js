import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-lists';
import CategoryList from './src/videos/containers/category-list';
import API from './src/utils/api';

class App extends React.Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState({suggestionList: movies, categoryList: categories});
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>eee</Text>
        </Header>
        <CategoryList list={this.state.categoryList}></CategoryList>
        {/* <Text>Este es mi texto</Text> */}
        <SuggestionList list={this.state.suggestionList}></SuggestionList>
      </Home>
    );
  }
}

export default App;
