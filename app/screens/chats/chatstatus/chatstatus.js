

import React, { useState } from "react";
import { Image, View, SafeAreaView } from 'react-native';
import { Container, Header, Card, CardItem, Body, Title, Text, Left, Right, Thumbnail, Content, Button, Item, Switch, ListItem, Icon, List, DeckSwiper } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './statusstyle';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

var lg1 = require("../../../res/images/lg1.png")
var lg2 = require("../../../res/images/lg2.jpg")
var lg3 = require("../../../res/images/lg3.jpg")



const ChatStatus = (props) => {

  const cards = [
    {
      caption: 'Card One',
      name: 'One',
      image: lg3
    },

    {
      caption: 'Card Two',
      name: 'Two',
      image: lg1
    },

    {
      caption: 'Card Three',
      name: 'Three',
      image: lg2
    },

  ];

  return (
      
        <Swiper style={styles.wrapper} showsButtons={false} activeDotColor="white" autoplay={false} bounces={true} dotColor="orange" showsHorizontalScrollIndicator={true} loop={false}>
          {
            cards.map(item => {
              return (
                <View style={[styles.slideItem]}>
                  <Image style={[styles.statusImage]} source={item.image} resizeMode="contain" />
                </View>
              )
            })
          }


        </Swiper>

  );
};



ChatStatus.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: 'black',
      color:"white"
    },    headerTintColor: '#fff',

      }}
export default ChatStatus;
