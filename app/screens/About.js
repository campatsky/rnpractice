import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Header from '../layout/AppHeader';

export default class About extends Component {
  state = {
    title: 'About'
  };

  render() {
    return (
      <Header title={this.state.title}
              navigator={this.props.navigator}
      />
    );
  }
}