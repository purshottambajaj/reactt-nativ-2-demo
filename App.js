import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/HomeScreen';
import List1 from './components/List1';
import List2 from './components/List2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title: "APP" }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List1" component={List1} />
        <Stack.Screen name="List2" component={List2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
