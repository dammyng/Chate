import React from 'react';
import {
    StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
    f1: {
        flex: 1
    },
    headerImage: {
        alignSelf: "center"
    },
    moreIcon: {
        color: "black"
    },
    chatTextBox: {
        backgroundColor: "white",
        borderWidth: .5,
        borderColor: "lightgray",
        borderRadius: 20,
        paddingTop: 1,
        paddingBottom: 1,
        height: 30,
        fontSize: 13
    },
    sendIcon: {
        paddingLeft: 10,
        paddingRight: 10
    },
    fontColorBtn: {
        height: 20,
        width: 20,
        borderRadius: 25,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4
    },
    col_direction: {
        flexDirection: "column"
    },
    color_container: {
        alignSelf: "flex-end",
        paddingTop: 5
    },
    input_container: {
        paddingVertical: 6
    },
    row_direction: {
        flexDirection: "row"
    },
    sketch_canvas: {
        backgroundColor: "white",
        padding: 10,
        height: 150
    },
    page_content: {
        flex: 1,
        marginLeft: 0,
        paddingBottom: 10
    },
    footer: {
        flexWrap: "wrap",
        marginLeft: 0,
        paddingBottom: 10,
        borderWidth: 0,
        borderBottomWidth: 0,
        borderBottomColor: "transparent",
        borderColor: "transparent"
    },
    chatItem: {
        width: "80%"
    },
    chatBody: {
        backgroundColor: "#eceff1",
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingLeft: 10
    },
    chatBodyText: {
        fontSize: 13
    },
    chatItemMy: {
        alignSelf: "flex-end",
        width: "80%"
    },
    chatBodyMy: {
        backgroundColor: "transparent",
        borderBottomLeftRadius:12,
        borderTopRightRadius:12,
        borderWidth: .5,
        borderColor:"#eceff1",
        paddingLeft:10
    },
    chatBodyTextMy: {
        fontSize: 13,
       
    }, mb10:{marginBottom:10}
})