import React, {Component} from 'react';
import {
  FlatList,
  View
} from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Text
} from 'native-base';

import Header from '../layout/AppHeader';
import Footer from '../layout/AppFooter';


export default class Allergies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Allergies',
      medications: null,
    };
  }

  getMeds() {
    fetch('https://fhirtest.uhn.ca/baseDstu2/MedicationOrder?patient=hca-pat-64', {
      method: 'GET',
      headers: {'Accept': 'application/json',}
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('data', data.entry);
      this.setState({medications: data.entry});
    }).catch((error) => {
      console.error(error)
    }).done();
  }

  componentDidMount() {
    this.getMeds();
  }

  renderLoadingView() {
    return (
      <Container>
        <Header title={this.state.title} navigator={this.props.navigator}/>
        <Content>
          <View>
            <Text>Loading Medications...</Text>
          </View>
        </Content>
        <Footer navigator={this.props.navigator}/>
      </Container>
    );
  }

  render() {
    if (!this.state.medications) {
      return this.renderLoadingView();
    }

    return (
      <Container>
        <Header title={this.state.title} navigator={this.props.navigator}/>
        <Content>
          <FlatList
            data={this.state.medications}
            keyExtractor={(item, index) => item.resource.id}
            renderItem={(data) =>
              <ListItem>
                <Text>{data.item.resource.medicationCodeableConcept.text}</Text>
              </ListItem>}
          />
        </Content>
        <Footer navigator={this.props.navigator}/>
      </Container>
    );
  }
}
