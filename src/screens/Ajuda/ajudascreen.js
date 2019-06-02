//*Import padrão*//
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";

//*Arquivos de CSS*//
import styles from "./styles";

export default class AjudaScreen extends Component {
  static navigationOptions = {
    drawerLabel: "CONTATO",
    drawerIcon: () => (
      <Image source={require("../../assets/imgs/contato.png")} />
    )
  };

  render() {
    return (
      <View>
        {/* Header com botao de voltar */}
        <Header
          containerStyle={{ height: 50 }}
          placement="left"
          backgroundColor="#33A765"
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Image
                style={{ marginLeft: 20, marginBottom: 22 }}
                source={require("../../assets/imgs/voltar.png")}
              />
            </TouchableOpacity>
          }
        />
        {/* Texto */}
        <Text style={styles.titulo}>Em que posso ajudar?</Text>
        {/* Botões */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Perguntas")}
        >
          <View style={styles.botao}>
            <Text style={styles.txtbotao}>Dúvidas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.botao}>
            <Text style={styles.txtbotao}>Sugestões</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.botao}>
            <Text style={styles.txtbotao}>Reclamações</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
