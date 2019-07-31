
import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View, Text
} from 'react-native';
import { general, dark, light } from './theme';
import Routes from "./app/routes"
import ApolloClient from "apollo-boost";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { inDarkMode, toggleMode } from "./app/utils/storage"
import { ApolloProvider } from "react-apollo";



const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

export const ThemeContext = React.createContext();





const httpLink = new HttpLink({
  uri: "http://localhost:4466/"
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4466/`,
  options: {
    reconnect: true
  }
});
const client = new ApolloClient({
  uri: wsLink
})
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);




export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      contextState : {
        theme : {} ,
        isDark : null
      }, switchTheme: this.switchTheme
    }
  }

  chooseThemeObj = (_isDark)=>{
    if(_isDark ==false){
      return themes.light;                     
    } else{
      return themes.dark;                     
    }
  }

  async componentDidMount() {
    inDarkMode().then(currentTheme => {
      this.setState(prevState => {
        let contextState = Object.assign({}, prevState.contextState);  
        let _isDark = !!Number(currentTheme);
        contextState.isDark =  _isDark
        contextState.theme =  this.chooseThemeObj(_isDark)
        return { contextState };                               
      })
    }).then(()=>{
      console.log(this.state)
    })
  }

  switchTheme=()=>{
    let currentlyDark = this.state.contextState.isDark
    toggleMode(!currentlyDark)
    this.setState(prevState => {
      let contextState = Object.assign({}, prevState.contextState);  
      contextState.isDark = !currentlyDark;                     
      contextState.theme = this.chooseThemeObj(!currentlyDark)                     
      return { contextState };                               
    }, ()=>{
      console.log(this.state)
    })
  }

render =()=>{
  return(
  <ApolloProvider client={client}>
    <ThemeContext.Provider value={this.state}>
      <Routes />
    </ThemeContext.Provider>
  </ApolloProvider>
)}
}
