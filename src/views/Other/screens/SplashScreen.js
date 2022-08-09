import { View, Text, ActivityIndicator, Image } from 'react-native'
import styles from '../styles/SplashStyle'
import logo from '../../../../assets/images/logo.png'
import { useEffect } from 'react'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1000)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" color="white" style={styles.loading} />
      </View>
    </View>
  )
}
