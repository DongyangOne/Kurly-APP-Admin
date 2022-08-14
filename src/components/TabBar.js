//바텀 탭 스크린용 컨테이너
import * as React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from '../views/Other/screens/HomeScreen'
import MyPage from '../views/Other/screens/MyPage'

const Tab = createBottomTabNavigator()

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="MyPage" component={MyPage} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Work" component={MyPage} />
    </Tab.Navigator>
  )
}
