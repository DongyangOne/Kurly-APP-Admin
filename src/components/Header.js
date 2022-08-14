import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import color, { white } from '../../assets/color'
import logo from '../../assets/images/logo.png'

export default function Header(props) {
  const clickNav = () => {
    props.navigation.openDrawer()
  }
  return (
    <View style={styles.container}>
      <View style={styles.null} />
      <View style={styles.navView}>
        <TouchableOpacity onPress={clickNav}>
          <Image source={logo} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.kurly,
  },
  navView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
  },
  text: {
    color: white,
    marginLeft: 10,
  },
  null: {
    flex: 1,
  },
})
