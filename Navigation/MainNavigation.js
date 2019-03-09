import { createBottomTabNavigator } from "react-navigation";
import { View } from "react-native";
import Home from "../Route/Home";

const mainTabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home
    // navigationOptions: {}
  },
  Flowers: {
    screen: View
  },
  Notification: {
    screen: View
  },
  Library: {
    screen: View
  }
});

export default mainTabNavigation;
