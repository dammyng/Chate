

import React, { useState } from "react";
import { Image, View, SafeAreaView } from 'react-native';
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item, Switch, ListItem, Icon, List, Header, Footer, FooterTab, Input, Accordion } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './chatpagestyle';
import * as Animatable from 'react-native-animatable';
import { ChangeFontColor } from "../../../utils/conversation"
var avatar1 = require("../../../res/images/avatar1.png")

_renderTextTray = (Fontcolor, SetFontColor, fontFamily, SetFontFamily) => {
  let fonts =[null, "NK57MonospaceSeRg-Regular","Scriptina"]

  return (

    <View>
      <Row style={styles.color_container}>
        <Button primary style={[styles.fontColorBtn]} onPress={() => SetFontColor("blue")} ></Button>
        <Button danger style={[styles.fontColorBtn]} onPress={() => SetFontColor("red")} ></Button>
        <Button warning style={[styles.fontColorBtn]} onPress={() => SetFontColor("orange")} ></Button>
        <Button info style={[styles.fontColorBtn]} onPress={() => SetFontColor("lightblue")} ></Button>
        <Button dark style={[styles.fontColorBtn]} onPress={() => SetFontColor("black")}></Button>
        <Button success style={[styles.fontColorBtn]} onPress={() => SetFontColor("green")} ></Button>
        <Icon active name="clipboard" style={styles.sendIcon} />

      </Row>
      <Item style={styles.input_container}>
        <Icon active name='camera' style={styles.sendIcon} />
        <Icon active name="color-wand" style={styles.sendIcon} onPress={()=>{{SetFontFamily((fontFamily + 1) %3 )}}} />
        <Input style={[styles.chatTextBox, { color: Fontcolor, fontFamily:fonts[fontFamily] }]} placeholder="Type your message here" />
        <Icon active name='send' style={styles.sendIcon} />
      </Item>
    </View>
  );
}

_renderContent = () => {
  return (
    <View
      style={styles.sketch_canvas}
    >
    </View>
  );
}

const ChatPage = (props) => {

  
  let [fontColor, SetFontColor] = useState("black")
  let [fontFamily, SetFontFamily] = useState(0)

  const dataArray = [
    {},
  ];



  return (


    <Container>
      <Header>
        <Left>

        </Left>
        <Body>
          <Thumbnail small style={styles.headerImage} source={avatar1} />
        </Body>
        <Right>
          <Button transparent>
            <Icon name='more' style={styles.moreIcon} />
          </Button>
        </Right>
      </Header>
      <Item style={[styles.col_direction, styles.page_content]}>
        <Content padder style={[styles.f1, { width: "100%" }]}>
          <List>
            <ListItem noBorder avatar style={[styles.mb10, styles.chatItem]}>

              <Body style={styles.chatBody}>
                <Text style={styles.chatBodyText} note>Doing what you like will always keep you happy . .</Text>
              </Body>

            </ListItem>

            <ListItem noBorder avatar style={[styles.mb10, styles.chatItemMy]}>
              <Body style={styles.chatBodyMy}>
                <Text style={styles.chatBodyTextMy} note>Doing what you like will always keep you happy . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>


        <Item last={true} underline={false} bordered={false} style={styles.footer}>
          <Accordion dataArray={dataArray} expanded={false} animation={true} renderHeader={() => this._renderTextTray(fontColor, SetFontColor, fontFamily, SetFontFamily)} renderContent={this._renderContent}

          />
        </Item>
      </Item>
    </Container>
  );
};

export default ChatPage;
