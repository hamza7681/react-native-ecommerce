import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'green',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="home" color={color} size={20} />;
            },
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="search1" color={color} size={20} />;
            },
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="shoppingcart" color={color} size={20} />;
            },
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="user" color={color} size={20} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
