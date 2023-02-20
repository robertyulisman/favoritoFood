import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, Dashboard, Profile} from '../pages';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createSharedElementStackNavigator();
const CartStack = createSharedElementStackNavigator();
const ProfileStack = createSharedElementStackNavigator();

const StackHome = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
    </HomeStack.Navigator>
  );
};

const StackCart = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CartStack.Screen name="Keranjang" component={Cart} />
    </CartStack.Navigator>
  );
};

const StackProfile = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.primary.one,
          tabBarLabelStyle: {fontFamily: 'Nunito Regular', fontSize: 12},
          tabBarLabel: 'Belanja',
          tabBarIcon: ({color, focused}) => (
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                bottom: 5,
                tintColor: focused ? colors.primary.one : colors.grayscale.two,
              }}
              source={require('../asset/icon/belanja.png')}
            />
          ),
        }}
        name="HomeTab"
        component={StackHome}
      />

      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.primary.one,
          tabBarLabelStyle: {fontFamily: 'Nunito Regular', fontSize: 12},
          tabBarLabel: 'Keranjang',
          tabBarIcon: ({color, focused}) => (
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                bottom: 5,
                tintColor: focused ? colors.primary.one : colors.grayscale.two,
              }}
              source={require('../asset/icon/keranjang.png')}
            />
          ),
        }}
        name="CartTab"
        component={StackCart}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.primary.one,
          tabBarLabelStyle: {fontFamily: 'Nunito Regular', fontSize: 12},
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, focused}) => (
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                bottom: 5,
                tintColor: focused ? colors.primary.one : colors.grayscale.two,
              }}
              source={require('../asset/icon/akun.png')}
            />
          ),
        }}
        name="ProfileTab"
        component={StackProfile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
