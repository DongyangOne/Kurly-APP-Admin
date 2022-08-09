import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'
import Header from '../../../components/Header'

import styles from '../styles/Mainstyle'

export default function MainScreen(props) {
  const data = ['입고/적치', '피킹', '다스', '포장', '물류']
  const headData = ['no', '이름', '업무횟수', '근무시간', '근태']
  const bodyData = [['1', '홍길동', '5', '??시간', 100]]
  const keyword = props.route.params

  return (
    <View style={styles.mainView}>
      <Header style={styles.header} />
      <View style={styles.content}>
        <View style={styles.chapter}>
          <Text style={styles.chapterText}>{keyword} 마켓컬리</Text>
        </View>
        <View style={styles.navView}>
          {data.map((item) => (
            <TouchableOpacity key={item} style={styles.navBtn}>
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.navView2}>
          <TextInput placeholder="인원 검색" style={styles.navSearch} />
          <TextInput placeholder="인원 입력" style={styles.inputNumber} />
          <TouchableOpacity style={styles.navBtn2}>
            <Text style={styles.navText2}>버튼</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chart}>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            <Row data={headData} style={styles.head} textStyle={styles.text} />
            {bodyData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
      </View>
    </View>
  )
}
