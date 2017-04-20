import React, {Component} from 'react';
import {Navigator} from 'react-native';

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
    if (this.props.noBack) {
      return (
        <Header>
          <Left/>
          <Body>
          <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
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
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Right>
        </Header>
      );
    }
  }
}