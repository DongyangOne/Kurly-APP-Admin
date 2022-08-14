import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles/HomeStyle'

export default function InputScreen() {
  const keyword = ['입고/적치', '피킹', '다스', '포장', '분류']
  return (
    <View style={styles.components}>
      <View style={styles.info}>
        <Text style={styles.infoText}>근로자 총 인원 : 100명</Text>
      </View>
      <View style={styles.box}>
        {keyword.map((item) => (
          <View style={styles.line}>
            <View style={styles.lineLeft}>
              <Text style={styles.leftText}>{item}</Text>
            </View>
            <View style={styles.lineRight}>
              <TextInput style={styles.lineInput}></TextInput>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>배치</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
