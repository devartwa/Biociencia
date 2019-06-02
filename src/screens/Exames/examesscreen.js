//*Import padrão*//
import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { Header } from "react-native-elements";
import { Searchbar } from "react-native-paper";
import { Picker } from "native-base";

//*Arquivos de CSS*//
import styles from "./styles";

export default class NovidadeScreen extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      firstQuery: ""
    }),
      (this.state = {
        picker: ""
      });
  }

  static navigationOptions = {
    drawerLabel: "EXAMES",
    drawerIcon: () => <Image source={require("../../assets/imgs/exames.png")} />
  };
  render() {
    const { firstQuery } = this.state;
    return (
      <ScrollView>
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
        <View>
          {/* Titulo */}
          <Text style={styles.titulo}>Informações sobre exames</Text>
        </View>
        <Searchbar
          style={{ width: "85%", marginLeft: 30, marginBottom: 10 }}
          placeholder="Pesquise por nome"
          onChangeText={query => {
            this.setState({ firstQuery: query });
          }}
          value={firstQuery}
        />
        {/* Seletor de exame */}
        <Picker
          selectedValue={this.state.picker}
          style={{ width: "87%", marginLeft: 30, marginBottom: 15 }}
        >
          <Picker.Item label="Escolha o tipo de exame" value="" />
          <Picker.Item label="Teste2" value="teste2" />
          <Picker.Item label="Teste3" value="teste3" />
          <Picker.Item label="Teste4" value="teste4" />
          <Picker.Item label="Teste5" value="teste5" />
        </Picker>
        {/* Imagem e texto */}
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/hemograma.png")} />
        </View>
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/glicemia.png")} />
        </View>
      </ScrollView>
    );
  }
}
