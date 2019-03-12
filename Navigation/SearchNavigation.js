import React from "react";
import { createStackNavigator } from "react-navigation";
import Search from "../Route/Search";
import Header from "../component/SearchHeader/Header";
import List from "../Route/List";

const SearchNavigation = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: props => ({
      header: <Header {...props} />
    })
  },
  List: {
    screen: List,
    navigationOptions: {
      header: null
    }
  }
});

export default SearchNavigation;
