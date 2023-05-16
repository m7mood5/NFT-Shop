import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import NFTDetails from './screens/NFTDetails';

export default function App() {
  const [fontLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!fontLoaded) return null;
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style='light' animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='WELCOME'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WELCOME" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NFT-details" component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

