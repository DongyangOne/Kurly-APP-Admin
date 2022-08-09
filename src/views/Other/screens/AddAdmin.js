import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import styles from '../styles/AddAdminStyle'

export default function AddAdmin({ navigation }) {
  const [inputId, setInputId] = useState()
  const [inputPw, setInputPw] = useState()
  const userData = [
    {
      id: '1111',
      pw: '1234',
    },
  ]

  const clickLoginBtn = () => {
    if (inputId !== userData[0].id || inputPw !== userData[0].pw)
      alert('Undefined User')
    navigation.navigate('choice')
  }

  return (
    <View style={styles.loginView}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>관리자 등록</Text>
        </View>
        <View style={styles.inBox}>
          <Text style={styles.inputLabelText}>등록할 사원의 이름</Text>
          <TextInput
            placeholder="이름을 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputId(() => e)}
            secureTextEntry={false}
          />
          <Text style={styles.inputLabelText}>등록할 사원의 사원번호</Text>
          <TextInput
            placeholder="사원번호를 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputPw(() => e)}
            secureTextEntry={true}
          />
          <Text style={styles.inputLabelText}>현재 관리자의 사원번호</Text>
          <TextInput
            placeholder="사원번호를 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputPw(() => e)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.loginBtn} onPress={clickLoginBtn}>
            <Text style={styles.btnText}>등록</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
