//*Import padrão*//
import React, { Component } from "react";
import AppNavigator from "./routes";
import "./configs/statusBarConfig";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
