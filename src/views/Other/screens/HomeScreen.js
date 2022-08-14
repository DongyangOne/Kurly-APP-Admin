import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Header from '../../../components/Header'
import styles from '../styles/HomeStyle'
import InputScreen from './InputScreen'
import ReadScreen from './ReadScreen'

export default function HomeScreen(props) {
  const [clicked, setClicked] = useState(false)
  const [name, setName] = useState()
  const keyword = ['입고/적치', '피킹', '다스', '포장', '분류']
  return (
    <View style={styles.mainView}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.chapter}>
          <Text style={styles.chapterText}>송파물류센터</Text>
        </View>
        <View style={styles.Nav}>
          <View style={styles.NavBox}>
            {keyword.map((item) => (
              <TouchableOpacity
                style={styles.NavBtn}
                onPress={() => {
                  setName(() => item)
                  setClicked(() => true)
                }}
              >
                <Text style={styles.NavText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setName(() => null)
                setClicked(() => false)
              }}
            >
              <Text>CLICK</Text>
            </TouchableOpacity>
          </View>
        </View>
        {clicked ? <ReadScreen name={name} /> : <InputScreen />}
      </View>
    </View>
  )
}
