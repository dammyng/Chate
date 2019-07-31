import React, {
    useState
} from "react";
import AsyncStorage from '@react-native-community/async-storage';


export const inDarkMode = async () => {
    try {
        const value = await AsyncStorage.getItem('darkMode')
        return value
    } catch (e) {
        console.log("aaaaaaaaaaaaahhhhhhhhhhhhhhh")

        return 0
    }
}

export const toggleMode = async (mode) => {
    try {
        await AsyncStorage.setItem('darkMode', mode, async ()=>{
            const value = await AsyncStorage.getItem('darkMode')
        })
    } catch (e) {
        console.log("aaaaaaaaaaaaahhhhhhhhhhhhhhh")
    }
}