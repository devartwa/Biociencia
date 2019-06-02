import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class AgendamentosScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'SAIR',
    drawerIcon: () => <Image source={require('../../assets/imgs/sair.png')}/>
  }

  render() {
    return(
      <View>
        <Text>{this.props.navigation.goBack()}</Text>
      </View>
    );
  }
}