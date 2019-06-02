import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class AgendamentosScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'COLETA À DOMICÍLIO',
    drawerIcon: () => <Image source={require('../../assets/imgs/coleta.png')}/>
  }

  render() {
    return(
      <View>
        <Text>Olá mundo.</Text>
      </View>
    );
  }
}