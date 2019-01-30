import React, {Component} from 'react'
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Home from './komponen/Home'
import Coba from './komponen/Coba'
import { Drawer } from 'native-base'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

export default class App extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});    
  }

  render() {
    return (
      <View style={[{marginTop: 22}, s.justifyContentCenter, s.alignItemsCenter, s.h100, s.bgSuccess]}>
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.modalVisible}>
        <KeyboardAwareScrollView>
        <View style={[{marginTop: 22}, s.justifyContentCenter, s.alignItemsCenter, s.h100, s.bgSuccess]}>
        <TouchableOpacity 
          onPress={() => this.setModalVisible(false)}
          style={[{marginTop: 22}, s.h100, s.justifyContentCenter, s.alignItemsCenter]}
        >
          <TouchableWithoutFeedback>
            <View style={[s.bgWhite, s.w75, {borderRadius: 25, height: '40%'}]}>
              <View style={[s.mx3, s.mt4]}>
                <Text style={[s.h5, s.ml3, s.mb3, s.textSecondary]}>Login</Text>
                <TextInput 
                  style={[s.formControl, s.mb3, 
                  {borderRightWidth: 1, borderLeftWidth: 1, borderTopWidth: 1,  borderBottomWidth: 1, borderBottomColor: 'gray', borderLeftColor: 'gray', borderTopColor: 'gray', borderRightColor: 'gray'
                  }]} placeholder='Email' 
                />
                <TextInput style={[s.formControl, s.mb2, 
                  {borderRightWidth: 1, borderLeftWidth: 1, borderTopWidth: 1,  borderBottomWidth: 1, borderBottomColor: 'gray', borderLeftColor: 'gray', borderTopColor: 'gray', borderRightColor: 'gray'
                  }]} placeholder='Password' 
                />
                <TouchableOpacity>
                  <Text style={[s.h6, s.mt1, s.textSecondary, s.textRight]}>Lupa Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[s.btn, s.btnPrimary, s.mt5]}>
                  <Text style={[s.textWhite, s.textCenter]}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
      </Modal>

      <TouchableHighlight
        style={[s.btn, s.btnPrimary, {width: 150}]}
        onPress={() => {
          this.setModalVisible(true);
        }}>
        <Text style={[s.textWhite, s.textCenter]}>Show Modal</Text>
      </TouchableHighlight>
    </View>
    )
  }
}