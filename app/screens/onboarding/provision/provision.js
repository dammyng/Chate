

import React, { useState } from "react";
import { Image } from 'react-native';
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item, Form, Label, Input } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './provisionstyle';
import PhoneInput from 'react-native-phone-input'
import Spinner from 'react-native-loading-spinner-overlay';

import { Query, Mutation } from "react-apollo";
import gql from 'graphql-tag'
import { provision } from "../../../api/user"
import Toast, {DURATION} from 'react-native-easy-toast'
const LoginScreen = (props) => {

  let [loading, setLoading] = useState(false)

  setUpUser = async () => {
    setLoading(true)
    let result = await provision({ email: "kamilus" });

    if(result.status == true){
    }else{
      this.toast.show(result.body);
    }
      setLoading(false)
    
  }


  return (
    <Container>
      <Content>
        <Item style={styles.pickerWrapper}>
          <Input style={styles.phonePicker} keyboardType="email-address" placeholder="Enter Email Address" />
        </Item>

        <Spinner
          visible={loading}
          textContent={'Loading...'}
        />


<Button small onPress={() => { setUpUser() }}style={{alignSelf:"center"}} >
          <Text>Continue</Text>

        </Button>
       


                 <Toast position={"center"} textStyle={styles.errorToast}  ref={(ref) => { this.toast = ref; }}

/>
      </Content>
    </Container>
  );
};

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <Button hasText transparent onPress={() => navigation.push("ChatList")} >
        <Text>Done</Text>
      </Button>)
  }
}

export default LoginScreen;
