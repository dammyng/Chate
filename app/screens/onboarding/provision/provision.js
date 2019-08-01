

import React, { useState } from "react";
import { Image } from 'react-native';
import { Container, Card, CardItem, Body,Icon, Title, Text, Left, Right, Thumbnail,Header, Content, Button, Item, Form, Label, Input } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './provisionstyle';
import Spinner from 'react-native-loading-spinner-overlay';
import { provision } from "../../../api/user"
import Toast, { DURATION } from 'react-native-easy-toast'
import { ThemeContext } from "../../../../App"
import {StatusStyle} from "../../../utils/theme"

const LoginScreen = (props) => {

  let [loading, setLoading] = useState(false)
  let [email, setEmail] = useState("")
  setUpUser = async () => {
    if (validateEmail(email) == true) {
      setLoading(true)
      let result = await provision({ email: email });
      if (result.status == true) {
        props.navigation.push("ChatList")
      } else {
        this.toast.show(result.body);
      }
      setLoading(false)
    } else {
      setEmail("'" + email + "'" + " is not a valid Email address")
    }
  }

 


  function validateEmail(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  }


  return (
    <ThemeContext.Consumer>         
    {({ contextState}) => {
  
      return (
        <Container style={[contextState.theme,]}>
        <Header iosBarStyle={StatusStyle(contextState)} style={{ backgroundColor: "transparent" }} >
                <Left>
                  <Button transparent onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name='arrow-back' style={[contextState.theme]} />
                    <Text style={[contextState.theme]}>Back</Text>
                  </Button>
                </Left>
                <Body>
                </Body>
                <Right>
                <Button hasText transparent onPress={() => props.navigation.push("ChatList")} >
        <Text>Done</Text>
      </Button>
                </Right>
              </Header>
        <Content>
          <Item style={styles.pickerWrapper}>
            <Input style={[contextState.theme,styles.phonePicker]} value={email} keyboardType="email-address" placeholder="Enter Email Address" onChangeText={(text) => { setEmail(text) }} />
          </Item>
          <Spinner
            visible={loading}
            textContent={'Loading...'}
          />
          <Button small onPress={() => { setUpUser() }} style={{ alignSelf: "center" }} >
            <Text>Continue</Text>
          </Button>
          <Toast position={"center"} textStyle={styles.errorToast} ref={(ref) => { this.toast = ref; }}
          />
        </Content>
      </Container>
      )
    }} 
    </ThemeContext.Consumer>
  );
};

LoginScreen.navigationOptions = ({ navigation }) => {
 
  let themeParams  = navigation.getParam("appTheme") || {}
  
  return {
     header: null

  }
}

export default LoginScreen;
