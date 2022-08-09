import { Link, useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import styles from '../styles/ChoiceStyle'

export default function ChoiceScreen(props) {
  const data = [
    ['송파', '항동'],
    ['김포', '화도'],
    ['죽전', '곤지암'],
  ]

  return (
    <View style={styles.choiceView}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.chapterView}>
          <Text style={styles.chapterText}>근무지</Text>
        </View>
        <View style={styles.listView}>
          {data.map((itemList) => (
            <View key={itemList} style={styles.lineView}>
              {itemList.map((item) => (
                <View key={item} style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      props.navigation.navigate('main', item)
                    }}
                  >
                    <Text style={styles.btnText}>{item}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
