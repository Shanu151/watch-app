import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useFont } from './src/Hooks/useFont';
import CreateSplashscreen from './src/components/screens/CreateSplashscreen';
import CreateAccount from './src/components/screens/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/Dashboard/MainScreen';
import LogInScreen from './src/components/screens/LogInScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(useFont);
if(!fontsLoaded){
  return null;
}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreateSplashscreen' screenOptions={{headerShown:false}} >
      <Stack.Screen name="CreateSplashscreen" component={CreateSplashscreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LoginScreen" component={LogInScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    
  },
});
