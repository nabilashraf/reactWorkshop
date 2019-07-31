import React from 'react';
import { 
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import { Button } from 'react-native';
import Home from '../container/Home';
import Profile from '../container/Profile';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
  },
});

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Profile: {
    screen: ProfileStack,
  }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: navigationOptionsHeader
  }
);

const navigationOptionsHeader = ({ navigation }) => {
  return {
    headerTitle: 'Home',
    headerRight: (
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Menu"
        color="#222"
      />
    )
  };
};

const RouteContainer = createAppContainer(AppDrawer);

export default RouteContainer;
