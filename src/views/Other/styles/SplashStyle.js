const { StyleSheet } = require('react-native'),
  Color = require('../../../../assets/color')

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.kurly,
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
