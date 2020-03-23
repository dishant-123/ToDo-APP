import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function ToDoItem({item, pressHandler})
{
    return (
        <TouchableOpacity onPress = {()=> pressHandler(item.key)}>
            <View style = {styles.item}>
                <MaterialIcons name = 'delete' size={20} color = '#333'/>
                <Text style = {styles.text} > {item.task} </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   item : {
       padding : 16,
       marginTop : 16,
       borderColor:'#bbb',
       borderWidth : 1,
       borderStyle: 'dashed',
       borderRadius : 10,
       flexDirection : "row",
   },
   text : {
       marginLeft : 10,
   }
})