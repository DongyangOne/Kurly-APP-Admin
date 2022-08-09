const { StyleSheet, Dimensions } = require('react-native'),
  Color = require('../../../../assets/color')
const { black } = require('../../../../assets/color')

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
  mainView: {
    marginTop: 34,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 36,
    color: 'purple',
  },
  content: {
    flex: 12,
    alignItems: 'center',
  },
  chapter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  chapterText: {
    fontSize: 30,
  },
  navView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  navBtn: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    margin: 5,
  },
  navView2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  navBtn2: {
    width: 50,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.grey,
  },
  navSearch: {
    backgroundColor: Color.grey,
    width: 150,
    height: 35,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 40,
    paddingHorizontal: 10,
  },
  inputNumber: {
    backgroundColor: Color.grey,
    width: 100,
    height: 35,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  chart: {
    flex: 8,
    backgroundColor: '#fff',
    borderWidth: 3,
    width: 350,
    alignItems: 'center',
  },
  head: {
    width: 345,
    height: 30,
    backgroundColor: '#808B97',
  },
  text: { color: black },
  row: {
    width: 345,
    flexDirection: 'row',
    backgroundColor: '#FFF1C1',
    borderTopWidth: 1,
  },
  btnText: { textAlign: 'center', color: '#fff' },
})
