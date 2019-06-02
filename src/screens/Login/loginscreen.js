//*Import padrão*//
import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

//*Arquivos de CSS*//
import styles from "./styles";

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
    drawerLabel: () => null
  }
  render () {
    return(
      <View>
        {/* Background */}
        <ImageBackground source={require("../../assets/imgs/background.png")} resizeMode="cover" style={{ width: "100%", height: "100%" }} >
          {/* Logo da Empresa */}
          <View style={styles.logo}>
            <Image source={require("../../assets/imgs/logo.png")} />
          </View>
          {/* Inputs e-mail/senha */}
          <View>
            <View style={styles.input}>
              <Image style={{marginTop: 15}} source={require('../../assets/imgs/envelope.png')}/>
              <TextInput placeholder="marcos@laboratoriobiociencia.com.br" keyboardType="email-address"/>
            </View>    
            <Image style={{alignSelf: "center"}} source={require('../../assets/imgs/line.png')}/>
          </View>
          <View>
            <View style={styles.input}>
              <Image style={{marginTop: 15}}source={require('../../assets/imgs/cadeado.png')}/>
              <TextInput placeholder="Digite a senha                        " secureTextEntry={true}/>
            </View>
            <Image style={{alignSelf: "center"}} source={require('../../assets/imgs/line.png')}/>
          </View>
          {/* Recuperar a senha */}
          <View>
            <TouchableOpacity>
              <Text style={styles.recuperarsenha}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
          {/* Botão de entrar */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Novidades')}>
            <View style={styles.botao}>
              <Text style={styles.txtbotao}>ENTRAR</Text>
            </View>              
          </TouchableOpacity>
          {/* Link pra cadastro */}
          <View style={styles.cadastro}>
              <Text> Ainda não tem uma conta?</Text>
              <TouchableOpacity>
                <Text style={styles.cadastrese}> Cadastre-se</Text>
              </TouchableOpacity>
          </View>                 
        </ImageBackground>
      </View>
    );
  }
}