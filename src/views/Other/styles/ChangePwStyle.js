import { StyleSheet } from 'react-native'
import color from '../../../../assets/color'

module.exports = StyleSheet.create({
  loginView: {
    marginTop: 34,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 11,
  },
  logoBox: {
    justifyContent: 'center',
    flex: 1,
  },
  inBox: {
    flex: 1.5,
    justifyContent: 'center',
  },
  btnBox: {
    justifyContent: 'center',
    flex: 1.5,
  },
  logoText: {
    fontSize: 36,
  },
  inputBox: {
    marginBottom: 20,
    width: 240,
    height: 40,
    paddingHorizontal: 15,
    color: color.black,
    backgroundColor: color.white,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: color.black,
  },
  loginBtn: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 240,
    height: 40,
    backgroundColor: color.kurly,
  },
  btnText: {
    color: color.white,
    fontSize: 20,
  },
  inputLabelText: {
    fontSize: 16,
    marginBottom: 5,
  },
})
