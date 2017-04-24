import React, {Component} from 'react';
import {Navigator} from 'react-native';

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


export default class About extends Component {
  state = {
    title: 'About'
  };

  render() {
    return (
      <Container>
        <Header title={this.state.title} navigator={this.props.navigator}/>
        <Content>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem header>
              <Text>
                Header 1
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et congue lacus, a aliquet odio. Nullam
                et porttitor sapien. Etiam porttitor gravida odio nec suscipit. Praesent scelerisque quam in ex maximus,
                sit amet aliquet odio iaculis. Pellentesque lacus est, condimentum at purus sit amet, consectetur
                molestie nibh.
              </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
            </CardItem>
            <CardItem header>
              <Text>
                Header 2
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Nunc aliquet congue fermentum. Aliquam accumsan nulla sem, quis semper augue aliquam sit amet. Duis et
                odio sapien. Mauris at leo sit amet urna vulputate tempor vel vitae elit. Nullam laoreet quam vel ex
                bibendum, non efficitur leo posuere. Vivamus euismod sem at ligula tincidunt gravida. Nunc sed ipsum
                lorem. Sed bibendum lobortis odio. Curabitur bibendum et quam id porta. Aenean vehicula efficitur
                congue. Nulla facilisi.
              </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
            </CardItem>
            <CardItem header>
              <Text>
                Header 3
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et congue lacus, a aliquet odio. Nullam
                et porttitor sapien. Etiam porttitor gravida odio nec suscipit. Praesent scelerisque quam in ex maximus,
                sit amet aliquet odio iaculis. Pellentesque lacus est, condimentum at purus sit amet, consectetur
                molestie nibh.
              </Text>
            </CardItem>
          </Card>
        </Content>
        <Footer navigator={this.props.navigator}/>
      </Container>
    );
  }
}