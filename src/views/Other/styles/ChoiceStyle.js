const { StyleSheet } = require('react-native'),
  Color = require('../../../../assets/color')

module.exports = StyleSheet.create({
  choiceView: {
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
  },
  chapterView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  chapterText: {
    fontSize: 48,
  },
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: Color.grey,
  },
  btnText: {
    fontSize: 20,
    color: Color.black,
  },
  listView: {
    flex: 4,
    alignItems: 'center',
  },
  lineView: {
    flex: 1,
    flexDirection: 'row',
  },
})
