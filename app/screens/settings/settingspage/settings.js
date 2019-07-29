

import React, { useState } from "react";
import { Image , View} from 'react-native';
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item, Switch, ListItem, Icon, List} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './settingstyle';
import * as Animatable from 'react-native-animatable';
var avatar1 = require("../../../res/images/avatar1.png")


const SettingScreen = (props) => {
  return (
    <Container>
    <Content>
        <View avatar style={styles.profile_container}>
              <Left>
              </Left>
              <Body>
              
              <Thumbnail source={avatar1} />

<Item style={styles.pt10}>

<Text>Kumar Pratik </Text>
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
              <Text>Dark Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
        </Content>

    </Container>
  );
};

export default SettingScreen;
