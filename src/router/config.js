import { 
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
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
});

const RouteContainer = createAppContainer(AppDrawer);

export default RouteContainer;
