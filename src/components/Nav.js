import { StyleSheet } from 'react-native'
import color from '../../assets/color'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Nav() {
  const keyword = ['입고/적치', '피킹', '다스', '포장', '분류']
  const navigation = useNavigation()
  return (
    <View style={styles.Nav}>
      <View style={styles.NavBox}>
        {keyword.map((item) => (
          <TouchableOpacity
            style={styles.NavBtn}
            onPress={() => {
              navigation.navigate('read', item)
            }}
          >
            <Text style={styles.NavText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
