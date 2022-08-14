import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'
import styles from '../styles/MyPageStyle'

export default function MyPage(props) {
  // const navigation = useNavigation()
  return (
    <View style={styles.pageView}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>마이페이지</Text>
        </View>
        <View style={styles.imgBox}>
          <View style={styles.img}></View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>이름 : 김인후</Text>
          <Text style={styles.infoText}>사번 : 20200834</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={props.navigation.navigate('pw')}
          >
            <Text style={styles.btnText}>비밀번호 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>근무자 배치 확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
