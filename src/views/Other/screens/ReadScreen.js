import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'

import styles from '../styles/ReadStyle'

export default function ReadScreen(props) {
  const data = ['입고/적치', '피킹', '다스', '포장', '물류']
  const headData = ['no', '이름', '업무횟수', '근무시간', '근태']
  const bodyData = [['1', '홍길동', '5', '??시간', 100]]

  return (
    <View style={styles.readView}>
      <View>
        <Text>{props.name}</Text>
        <Text>입고/적치 인원 : 100명</Text>
      </View>
      <View style={styles.chart}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={headData} style={styles.head} textStyle={styles.text} />
          {bodyData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </View>
  )
}
