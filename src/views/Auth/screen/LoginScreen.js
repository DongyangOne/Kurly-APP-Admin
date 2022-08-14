import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import { useInput, useNull } from '../../../util/common'
import styles from '../styles/LoginStyle'

const userData = [
  {
    id: '1111',
    pw: '1234',
  },
]

export default function LoginScreen({ navigation }) {
  const id = useInput()
  const pw = useInput()

  const clickLoginBtn = () => {
    if (!useNull([id, pw])) return alert('Null Point')
    if (id.item !== userData[0].id || pw.item !== userData[0].pw)
      return alert('Undefined User')
    navigation.navigate('Main')
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
            onChangeText={(e) => id.setItem(e)}
            secureTextEntry={false}
          />
          <Text style={styles.inputLabelText}>비밀번호</Text>
          <TextInput
            placeholder="비밀번호를 입력해주세요"
            style={styles.inputBox}
            onChangeText={(e) => pw.setItem(e)}
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
