import React, {Component} from 'react';
import {Navigator} from 'react-native';
import {Drawer} from 'native-base';

import Home from './screens/Home';
import About from './screens/About';
import SideBar from './layout/sidebar';

export default class RNPractice extends Component {

  renderScene(route, navigator) {
    if (route.title === 'Home') {
      return <Home navigator={navigator}/>
    } else if (route.title === 'About') {
      return <About navigator={navigator}/>
    }
  }

  closeDrawer = () => {
    this.drawer.root.close()
  };
  openDrawer = () => {
    this.drawer.root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator}/>}
        onClose={() => this.closeDrawer()}>
        <Navigator
          initialRoute={{title: 'Home'}}
          renderScene={this.renderScene}
        />
      </Drawer>
    );
  }
}
