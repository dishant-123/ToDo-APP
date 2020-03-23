import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header()
{
    return (
        <View style = {styles.header}>
            <Text style= {styles.title}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height : 80,
        paddingTop : 40,
        backgroundColor : 'blue',
    },
    title : {
        fontSize : 20,
        textAlign : 'center',
        fontWeight : 'bold',
        color : '#fff'
    }
})