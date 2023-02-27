import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Splash} from '../pages';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomTabs} />
    </Stack.Navigator>
  );
}
