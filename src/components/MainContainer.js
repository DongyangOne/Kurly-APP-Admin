import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LoginScreen from '../views/Auth/screen/LoginScreen'
import RegisterScreen from '../views/Auth/screen/RegisterScreen'
import AddAdmin from '../views/Other/screens/AddAdmin'
import ChangePw from '../views/Other/screens/ChangePw'
import ChoiceScreen from '../views/Other/screens/ChoiceScreen'
import MainScreen from '../views/Other/screens/MainScreen'
import MyPage from '../views/Other/screens/MyPage'
import SplashScreen from '../views/Other/screens/SplashScreen'

const Stack = createNativeStackNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="choice"
          component={ChoiceScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="main"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
