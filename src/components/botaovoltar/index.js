import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

// Botão de voltar no menu do drawer
class BotaoVoltar extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
      >
        <Image
          style={{ alignSelf: "flex-end", marginHorizontal: 10, marginTop: 10 }}
          source={require("../../assets/imgs/voltarverde.png")}
        />
      </TouchableOpacity>
    );
  }
}
export default withNavigation(BotaoVoltar);
