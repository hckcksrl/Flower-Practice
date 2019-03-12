import { createStackNavigator } from "react-navigation";
import mainTabNavigation from "./MainNavigation";
import SearchNavigation from "./SearchNavigation";
import Header from "../component/SearchHeader/Header";

const RootNavigation = createStackNavigator({
  Tabs: {
    screen: mainTabNavigation,
    navigationOptions: {
      header: null
    }
  },
  SearchStack: {
    screen: SearchNavigation,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigation;
