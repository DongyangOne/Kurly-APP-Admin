const { StyleSheet } = require('react-native'),
  Color = require('../../../../assets/color')

module.exports = StyleSheet.create({
  loginView: {
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
    color: Color.black,
    backgroundColor: Color.white,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Color.black,
  },
  loginBtn: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 240,
    height: 40,
    backgroundColor: Color.kurly,
  },
  btnText: {
    color: Color.white,
    fontSize: 20,
  },
  inputLabelText: {
    fontSize: 16,
    marginBottom: 5,
  },
})
