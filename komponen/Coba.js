import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Coba = ({onPress}) => {
  return (
    <View style={[s.h100, s.justifyContentCenter, s.alignItemsCenter]}>
      <Text style={[s.h1, s.textCenter]}>Coba</Text>
      <TouchableOpacity onPress={onPress} style={[s.btn, s.btnPrimary, {width: 100}]}>
        <Text style={[s.textCenter]}>Cek</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Coba
