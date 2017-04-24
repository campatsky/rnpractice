import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Home from './screens/Home';
import About from './screens/About';
import Medications from './screens/Medications';
import Allergies from './screens/Allergies';
import Details from './screens/Details';


export default class RNPractice extends Component {

  renderScene(route, navigator) {
    if (route.title === 'Home') {
      return <Home navigator={navigator}/>
    } else if (route.title === 'About') {
      return <About navigator={navigator}/>
    } else if (route.title === 'Medications') {
      return <Medications navigator={navigator}/>
    } else if (route.title === 'Allergies') {
      return <Allergies navigator={navigator}/>
    } else if (route.title === 'Details') {
      return <Details navigator={navigator}/>
    }

  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Home'}}
        renderScene={this.renderScene}
      />
    )
  }
}
