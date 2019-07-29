
import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,Text
} from 'react-native';
import {general, dark, light} from './theme';
import Routes from "./app/routes"
import ApolloClient from "apollo-boost";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

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
  uri:wsLink
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

darkTheme = () =>{
  return false
}


import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
  <Routes/> 

  </ApolloProvider>
);




export default App;
