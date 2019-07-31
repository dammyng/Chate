

import React, { useState } from "react";
import { Image, View, SafeAreaView, StatusBar } from 'react-native';
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item, Switch, ListItem, Icon, List, Header } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './settingstyle';
import * as Animatable from 'react-native-animatable';
var avatar1 = require("../../../res/images/avatar1.png")
import { ThemeContext } from "../../../../App"

export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTheme: null
    }
  }

  static navigationOptions = ({ navigation }) => {
    var { params = {} } = navigation.state
    console.log(navigation)
    return {
      header: null
    };
  };


  async componentDidMount() {
    let value = this.context;
    console.log(value)
    this.props.navigation.setParams({ theme: contextState.theme })
  }

  switchMode = (contextState, switchTheme) => {
    this.props.navigation.setParams({ theme: contextState.theme })
    switchTheme()
  }

  statusStyle = (contextState) => {
    if (contextState.isDark == true) {
      return "light-content"
    } else {
      return "dark-content"

    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ contextState, switchTheme }) => {
          return (
            <Container style={[contextState.theme,]}>

              <Header iosBarStyle={this.statusStyle(contextState)} style={{ backgroundColor: "transparent" }} >

                <Left>
                  <Button transparent>
                    <Icon name='arrow-back' style={[contextState.theme]} />
                    <Text style={[contextState.theme]}>Back</Text>
                  </Button>
                </Left>
                <Body>
                </Body>
                <Right>

                </Right>
              </Header>
              <Content>
                <View avatar style={styles.profile_container}>
                  <Left>
                  </Left>
                  <Body>
                    <Thumbnail source={avatar1} />
                    <Item style={styles.pt10}>
                      <Text style={[contextState.theme]}>Kumar Pratik </Text>
                      <Text note> +234666777777 </Text>
                    </Item>
                  </Body>
                  <Right>
                  </Right>
                </View>
                <ListItem icon>
                  <Left>
                    <Button style={[styles.bg_black]}>
                      <Icon active name="contrast" />
                    </Button>
                  </Left>
                  <Body>
                    <Text style={[contextState.theme]}>Dark Mode</Text>
                  </Body>
                  <Right>
                    <Switch trackColor="orange" value={!!contextState.isDark} onValueChange={() => this.switchMode(contextState, switchTheme)} />
                  </Right>
                </ListItem>
              </Content>

            </Container>
          )
        }}
      </ThemeContext.Consumer>
    );
  }
};

