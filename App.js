import React, { Component,Fragment} from "react";
import { Text } from "react-native";
import RouteContainer from "./src/router/config";

class App extends Component{
  constructor() {
    super();
    this.state = {
      isTrue: false,
    }
  }
  
  render() {
    const { isTrue } = this.state;
    return (
      <Fragment>
        { <RouteContainer /> }
      </Fragment>
    );
  }
};



export default App;