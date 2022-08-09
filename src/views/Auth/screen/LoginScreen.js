import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import styles from '../styles/LoginStyle'

export default function LoginScreen({ navigation }) {
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
          <Text style={styles.logoText}>Kurly 인력 관리</Text>
        </View>
        <View style={styles.inBox}>
          <Text style={styles.inputLabelText}>사원번호</Text>
          <TextInput
            placeholder="사원번호를 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputId(() => e)}
            secureTextEntry={false}
          />
          <Text style={styles.inputLabelText}>비밀번호</Text>
          <TextInput
            placeholder="비밀번호를 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputPw(() => e)}
            secureTextEntry={true}
          />
          <Text style={styles.inputLabelText}>근무지</Text>
          <TextInput
            placeholder="근무지를 선택해주세요"
            style={styles.inputBox}
            onChangeText={(e) => setInputPw(() => e)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.loginBtn} onPress={clickLoginBtn}>
            <Text style={styles.btnText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
