import React, {Component} from 'react';
import {Navigator, View, Text} from 'react-native';

import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

export default class AppHeader extends Component {

  render() {
    if (!this.props.back) {
      return (
        <Header>
          <Left/>
          <Body>
          <Title>{this.props.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      );
    } else {
      return (
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title>{this.props.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      );
    }
  }
}