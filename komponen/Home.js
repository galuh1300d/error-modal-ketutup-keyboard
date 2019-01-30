import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

export class Home extends Component {
  render() {
    return (
      <View style={[s.h100, s.justifyContentCenter, s.alignItemsCenter, {backgroundColor: 'white'}]}>
        <Text style={[s.h1, s.textCenter]}>Header Miss</Text>
        <TouchableOpacity onPress={() => alert('coba')} style={[s.btn, s.btnPrimary, {width: 100}]}>
          <Text style={[s.textCenter]}>Cek</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home