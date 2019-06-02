import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { List, Checkbox } from "react-native-paper";
import { Header } from "react-native-elements";

export default class PerguntasScreen extends Component {
  // Deixar sem exibição no meu
  static navigationOptions = {
    drawerLabel: () => null
  };

  state = {
    expanded: true
  };
  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });
  render() {
    return (
      <View>
        {/* Header da tela */}
        <Header
          containerStyle={{ height: 50 }}
          placement="left"
          backgroundColor="#33A765"
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Ajuda")}
            >
              <Image
                style={{ marginLeft: 5, marginBottom: 22 }}
                source={require("../../assets/imgs/seta.png")}
              />
            </TouchableOpacity>
          }
        />
        {/* Titulo */}
        <Text style={{ marginLeft: 30, fontSize: 24, marginTop: 20 }}>
          Perguntas Frequentes
        </Text>
        {/* Lista de perguntas */}
        <List.Section>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="Qual o horario das coletas?"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              “As coletas funcionam de segunda-feira a sexta-feira em horario de
              funcionamento comercial, das 08:00h até as 18:00h , sendo
              necessario a previa confirmação de funcionamento em dias de
              feriados.”
            </Text>
          </List.Accordion>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="Quando solicitar coleta em domicilio?"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              “As coletas funcionam de segunda-feira a sexta-feira em horario de
              funcionamento comercial, das 08:00h até as 18:00h , sendo
              necessario a previa confirmação de funcionamento em dias de
              feriados.”
            </Text>
          </List.Accordion>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="Qual o tempo para sair meu resultado?"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              “As coletas funcionam de segunda-feira a sexta-feira em horario de
              funcionamento comercial, das 08:00h até as 18:00h , sendo
              necessario a previa confirmação de funcionamento em dias de
              feriados.”
            </Text>
          </List.Accordion>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="Meu plano de saúde cobre?"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              “As coletas funcionam de segunda-feira a sexta-feira em horario de
              funcionamento comercial, das 08:00h até as 18:00h , sendo
              necessario a previa confirmação de funcionamento em dias de
              feriados.”
            </Text>
          </List.Accordion>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="É preciso pagar a coleta?"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              “As coletas funcionam de segunda-feira a sexta-feira em horario de
              funcionamento comercial, das 08:00h até as 18:00h , sendo
              necessario a previa confirmação de funcionamento em dias de
              feriados.”
            </Text>
          </List.Accordion>
          <List.Accordion
            style={{ width: "90%", marginLeft: 20 }}
            title="Outros"
          >
            <Text style={{ width: "80%", marginLeft: 30 }}>
              Ligue na central de atendimentos.
            </Text>
          </List.Accordion>
        </List.Section>
      </View>
    );
  }
}
