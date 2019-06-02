import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import BotaoVoltar from "./components/botaovoltar";

/*Telas*/
import LoginScreen from "./screens/Login/loginscreen";
import AjudaScreen from "./screens/Ajuda/ajudascreen";
import NovidadeScreen from "./screens/Novidades/novidadescreen";
import PerguntasScreen from "./screens/Perguntas/perguntasscreen";
import ExamesScreen from "./screens/Exames/examesscreen";
import OrçamentosScreen from "./screens/Menu/orçamento";
import AgendamentosScreen from "./screens/Menu/agendamentos";
import ColetaScreen from "./screens/Menu/coleta";
import UnidadesScreen from "./screens/Menu/unidades";
import SairScreen from "./screens/Menu/sair";

//*Imagem perfil*//
const imgPerfil = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
      <BotaoVoltar />
      <Image
        style={{ alignSelf: "center" }}
        source={require("./assets/imgs/vanessa.png")}
      />
      <Text style={{ textAlign: "center" }}>Vanessa Freire</Text>
      <Text style={{ textAlign: "center" }}>CPF:123.123.123-00</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// Navegação
const AppNavigator = createDrawerNavigator(
  {
    Login: LoginScreen,
    Novidades: NovidadeScreen,
    Exames: ExamesScreen,
    Orçamentos: OrçamentosScreen,
    Agendamentos: AgendamentosScreen,
    Coleta: ColetaScreen,
    Unidades: UnidadesScreen,
    Ajuda: AjudaScreen,
    Sair: SairScreen,
    Perguntas: PerguntasScreen
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#33A765"
    },
    contentComponent: imgPerfil,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default createAppContainer(AppNavigator);
