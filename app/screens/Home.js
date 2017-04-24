import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem
} from 'native-base';

import Header from '../layout/AppHeader';
import Footer from '../layout/AppFooter';

export default class Home extends Component {
  state = {
    title: 'Home'
  };

  navigate(title) {
    this.props.navigator.push({title});
  }

  render() {
    return (
      <Container>
        <Header title={this.state.title} navigator={this.props.navigator}/>
        <Content>
            <CardItem>
              <Image source={require('../images/upmce.png')}
                     style={{resizeMode: 'contain', flex: 1, width: 50, height: 50}}></Image>
            </CardItem>
            <CardItem header>
              <Text style={{fontWeight: 'bold'}}>
                Welcome Message
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Welcome to the test application for react native by Patrick Cameron. This app is to display some of the
                basic features of react native to discern the value it offers.
              </Text>
            </CardItem>
            <CardItem style={{}}>
              <Button transparent block onPress={() => this.navigate('About')}><Text>Learn More</Text></Button>
            </CardItem>


        </Content>
        <Footer navigator={this.props.navigator}/>
      </Container>
    );
  }
}
