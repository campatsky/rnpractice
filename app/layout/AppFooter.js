import React, {Component} from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

export default class AppFooter extends Component {

  navigate(title) {
    this.props.navigator.push({title});
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => {this.navigate('Details')}}>
            <Icon name="ios-person-outline"/>
            <Text>Details</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button onPress={() => {this.navigate('Medications')}}>
            <Icon name="ios-medkit-outline"/>
            <Text>Meds</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button onPress={() => {this.navigate('Allergies')}}>
            <Icon name="ios-medical-outline"/>
            <Text>Allergies</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button onPress={() => {this.navigate('More')}}>
            <Icon name="ios-more-outline"/>
            <Text>More</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
