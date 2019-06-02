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

//*Arquivos de CSS*//
import styles from "./styles";

export default class NovidadeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "NOVIDADES",
    drawerIcon: () => (
      <Image source={require("../../assets/imgs/novidades.png")} />
    )
  };
  render() {
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
          <Text style={styles.titulo}>Novidades & Noticias</Text>
        </View>
        {/* Imagem e texto */}
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/caminhao.png")} />
        </View>
        <View>
          <Text style={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque mauris nec nunc placerat elementum. Donec sem tellus,
            gravida quis magna a, ultrices tincidunt risus placerat elementum.
            Donec sem tellus, gravida quis magna a, ultrices tincidunt risus.
          </Text>
        </View>
        {/* Imagem e texto */}
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/sapatos.png")} />
        </View>
        <View>
          <Text style={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque mauris nec nunc placerat elementum. Donec sem tellus,
            gravida quis magna a, ultrices tincidunt risus placerat elementum.
            Donec sem tellus, gravida quis magna a, ultrices tincidunt risus.
          </Text>
        </View>
        {/* Imagem e texto */}
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/caminhao.png")} />
        </View>
        <View>
          <Text style={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque mauris nec nunc placerat elementum. Donec sem tellus,
            gravida quis magna a, ultrices tincidunt risus placerat elementum.
            Donec sem tellus, gravida quis magna a, ultrices tincidunt risus.
          </Text>
        </View>
        {/* Imagem e texto */}
        <View style={styles.imagem}>
          <Image source={require("../../assets/imgs/sapatos.png")} />
        </View>
        <View>
          <Text style={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque mauris nec nunc placerat elementum. Donec sem tellus,
            gravida quis magna a, ultrices tincidunt risus placerat elementum.
            Donec sem tellus, gravida quis magna a, ultrices tincidunt risus.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
