import React, {Component} from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="md-home"/>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name="md-medkit"/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
