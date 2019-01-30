import React, {Component} from 'react'
import { Scene, Router, Actions, Drawer, Stack } from 'react-native-router-flux'
import { View, Image } from 'react-native'
import Home from './komponen/Home'

icon = () => {
  return (
    <Image source={require('./komponen/burger.png')} style={{width: 40, height: 40}}/>
  )
}

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#60c0f9'}} titleStyle={{color: 'white'}} >
        <Stack key="1" hideNavBar>
          <Drawer
            drawerIcon={icon}
            drawerWidth={300}
            contentComponent={icon}
          >
            <Scene key="auth" tabs showLabel={false}>
              <Scene key="home" component={Home} icon={icon} />
            </Scene>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
