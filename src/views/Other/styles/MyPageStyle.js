const { StyleSheet } = require('react-native'),
  Color = require('../../../../assets/color')

module.exports = StyleSheet.create({
  pageView: {
    flex: 1,
    marginTop: 34,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 12,
  },
  logoText: {
    fontSize: 36,
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgBox: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  img: {
    backgroundColor: Color.grey,
    width: 100,
    height: 100,
  },
  btn: {
    backgroundColor: Color.green,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    fontSize: 20,
  },
})
