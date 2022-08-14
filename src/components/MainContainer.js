import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import LoginScreen from '../views/Auth/screen/LoginScreen'
import ChangePw from '../views/Other/screens/ChangePw'
import ReadScreen from '../views/Other/screens/ReadScreen'
import TabBar from './TabBar'

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
          component={TabBar}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="pw"
          component={ChangePw}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
