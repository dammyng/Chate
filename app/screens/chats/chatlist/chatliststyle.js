import React from 'react';
import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    center: {
        alignSelf: "center"
    },
    f1: {
        flex: 1
    },
    search_wrapper: {
        flexDirection: "row"
    },
    cardItem: {
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 0,
        paddingBottom: 0, 
    },
    searchInput:{},
    settings_icon: {
        color: "#ffc107",
        backgroundColor:"black", padding:5
,        fontSize:18 , 
    },
    status_thumb: {
        padding: 6
    },
    status_thumb_wrapper: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10
    },
    chatTitle: {
        textAlign: "left",
        paddingLeft: 10
    },
    forward_icon: {
        fontSize: 10, padding:0, marginLeft:5 
    },
    timeline: {
        fontSize: 10,
        marginRight:0,
        marginLeft:0,
        textAlign:"center",
       paddingLeft:0, paddingRight:0
    }, chatRight:{maxWidth:70}
    , chatUsername:{fontSize:13}, 
    chatBrief:{fontSize:12}
})