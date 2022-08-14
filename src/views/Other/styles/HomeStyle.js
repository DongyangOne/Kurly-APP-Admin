import { StyleSheet } from 'react-native'
import color from '../../../../assets/color'

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
    flex: 11,
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
  Nav: {
    flex: 1,
  },
  box: {
    flex: 4,
  },
  line: {
    flex: 1,
  },
  lineLeft: {
    flex: 1,
  },
  lineRight: {
    flex: 1,
  },
  lineInput: {
    borderWidth: 3,
    borderColor: color.kurly,
  },
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: color.kurly,
    width: 100,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: color.white,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  infoText: {},
  Nav: {
    flex: 1,
  },
  NavBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 50,
    backgroundColor: color.kurly,
    flexDirection: 'row',
  },
  NavBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    width: 58,
    height: 45,
    backgroundColor: color.white,
  },
  NavText: {
    fontSize: 20,
  },
  components: {
    flex: 8,
  },
})
