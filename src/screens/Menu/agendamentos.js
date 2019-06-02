import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class AgendamentosScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'AGENDAMENTOS',
    drawerIcon: () => <Image source={require('../../assets/imgs/agendamento.png')}/>
  }

  render() {
    return(
      <View>
        <Text>Olá mundo.</Text>
      </View>
    );
  }
}