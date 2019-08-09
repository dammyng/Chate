import React from "react";
import { Container, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail,Header, Content, Button, Item, Icon, Input, List, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from "./chatliststyle";
import { TextInput, View, ScrollView } from "react-native";
import { getUser } from "../../../api/user"
import {defaultContactList} from "../../../utils/index"
import { ThemeContext } from "../../../../App"
import {StatusStyle} from "../../../utils/theme"

var avatar1 = require("../../../res/images/avatar1.png");
var avatar2 = require("../../../res/images/avatar2.png");

export default class ClassList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      available: [], notAvailable: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    let themeParams  = navigation.getParam("appTheme") || {}
    return {
header:null    }
  }
  

   async componentDidMount() {

     defaultContactList.forEach((element) => {
       this.updateAvailableList(element)
      })
  }




  updateAvailableList = async (element) => {
    let result = await getUser(element.email)

    if (result.body != null) {
      this.setState(state => {
        available = [...state.available, element]
        return {
          available,
        }
      })
    } else {
      this.setState(state => {
        notAvailable = [...state.notAvailable, element]
        return {
          notAvailable
        }
      })
    }
  }

  goToChat =()=>{
    this.props.navigation.push("ChatPage")
  }

  render() {
    let { available } = this.state
    return (
       <ThemeContext.Consumer>
        {({ contextState, switchTheme }) => {
          if(this.props.navigation.getParam("appTheme") != contextState){
        this.props.navigation.setParams({"appTheme": contextState})
      }
          return(
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
               
                </Right>
              </Header>
        <Card>
          <CardItem style={[styles.cardItem]}>
            <Body style={[styles.p3]}>
              <View style={[styles.search_wrapper]}>
                <TextInput placeholder="Search" style={[styles.f1, styles.searchInput]} />
                <Icon
                  onPress={() => this.props.navigation.push("Settings")}
                  name="ios-settings"
                  style={styles.settings_icon}
                />
              </View>
            </Body>
          </CardItem>
        </Card>
        <Content>
          <ChatItems available={available} goToChat = {this.goToChat}></ChatItems>
        </Content>
      </Container>
          )}}
      </ThemeContext.Consumer>
    )
  }
};


function ChatItems(props) {
  let available = props.available
  let goToChat = props.goToChat
  return (
    <List>
      {available.map(item => {
        return (
          <ChatListItem key={item.email} item={item} goToChat={goToChat} />
        )
      })}
    </List>
  )
}


function ChatListItem(props) {
  let item = props.item
  let goToChat = props.goToChat
  return (<ListItem thumbnail key={item.email}>
    <Left>
      <Thumbnail small source={avatar1} />
    </Left>
    <Body>
      <Text style={styles.chatUsername}>{item.name}</Text>
      <Text note numberOfLines={1} style={styles.chatBrief}>
        Its time to build a difference in your life . .
                </Text>
    </Body>
    <Right style={styles.chatRight}>
      <Button block primary small transparent  onPress={()=>goToChat()}>
        <Text style={styles.timeline}>3:43 pm</Text>
        <Icon
          name="arrow-forward"
          style={styles.forward_icon}
        />
      </Button>
    </Right>
  </ListItem>)
}

