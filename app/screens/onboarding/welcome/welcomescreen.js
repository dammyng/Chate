

import React, { useState } from "react";
import { Image } from 'react-native';
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './welcomescreenstyle';
import * as Animatable from 'react-native-animatable';
var chaticon = require("../../../res/images/chat.png")


const WelcomeScreen = (props) => {
  return (
    <Container>
      <Grid>
        <Row size={50} style={[styles.center]}>
          <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={chaticon} resizeMode="contain" style={[styles.imageHead]} />
        </Row>

        <Row size={50} style={[styles.col_direction]}>
          <Grid>
            <Row size={1} style={styles.center}>
            </Row>
            <Row size={5} style={[styles.center]}>
              <Content style={[]}>
                <Title style={[styles.tCenter, styles.self_center, styles.title]}>Welcome to Chate</Title>
                <Text style={[styles.tCenter, styles.self_center, styles.mid_text]}>Chat with friends, share photo and sketches in the most fun ways</Text>
               
 </Content>
            </Row>
            <Row size={8} style={[styles.center]}>
              <Button rounded small style={styles.start_button} onPress={()=> props.navigation.push("Provision")} >
                <Text>Start Chat</Text>
              </Button>
            </Row>
          </Grid>


        </Row>
      </Grid>
    </Container>
  );
};

export default WelcomeScreen;
