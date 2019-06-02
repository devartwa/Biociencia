import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class AgendamentosScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'UNIDADES',
    drawerIcon: () => <Image source={require('../../assets/imgs/unidades.png')}/>
  }

  render() {
    return(
      <View>
        <Text>Olá mundo.</Text>
      </View>
    );
  }
}