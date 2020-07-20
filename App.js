import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: {
        headerTitleStyle: { textAlign: "center", alignSelf: "center" },
      },
    },
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Albums",
    },
  }
);

export default createAppContainer(navigator);
