import { createBottomTabNavigator } from "react-navigation";
import { View } from "react-native";
import Home from "../Route/Home";
import Library from "../Route/Library";

const mainTabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Flowers: {
    screen: View
  },
  Notification: {
    screen: View
  },
  Library: {
    screen: Library
  }
});

export default mainTabNavigation;
