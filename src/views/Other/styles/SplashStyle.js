import { StyleSheet } from 'react-native'
import color from '../../../../assets/color'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.kurly,
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  logo: {
    width: 300,
    height: 300,
  },
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loading: {
    marginBottom: 100,
  },
})
