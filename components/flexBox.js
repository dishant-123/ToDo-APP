import React from 'react'
import {TextInput, View, StyleSheet, Button,Text} from 'react-native';

export default function FlexBox()
{
    return (
        <View style = {styles.container}>
            <Text style = {styles.text1}>Red</Text>
            <Text style = {styles.text2}>Green</Text>
            <Text style = {styles.text3}>Pink</Text>
            <Text style = {styles.text4}>Blue</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        backgroundColor :'gray',
        padding : 40,
    },
    text1 : {
        // flex : 1,
        backgroundColor : 'green',
        padding : 10,
    },
    text2 : {
        // flex : 1,
        backgroundColor : 'pink',
        padding : 20,
    },
    text3 : {
        // flex : 1,
        backgroundColor : 'blue',
        padding : 30,
    },
    text4 : {
        // flex : 1,
        backgroundColor : 'red',
        padding : 40,
    }
})