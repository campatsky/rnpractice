import React, {Component} from 'react';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';

import Header from '../layout/AppHeader';
import Footer from '../layout/footer';

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
        <Header title={this.state.title} noBack='true'
        />
        <Content>
          <Button block onPress={() => this.navigate('About')}><Text>Go to About page</Text></Button>
        </Content>
        <Footer/>
      </Container>
    );
  }
}
