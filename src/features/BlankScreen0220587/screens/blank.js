import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Icon name="facebook-square" />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/25391/dadb7a3e-aa23-4222-8a87-33218d77cca0.jpg"
        }}
        style={styles.Image_7}
      />
      <Button
        title="Press me!"
        style={styles.Button_28}
        onPress={() => alert("Pressed!")}
      />
      <View>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Icon_5: {},
  Image_7: {
    width: 169,
    borderStyle: "dashed",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Button_28: { fontSize: 10, fontFamily: "OpenSans-Regular" },
  View_38: {},
  View_39: {},
  View_40: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
