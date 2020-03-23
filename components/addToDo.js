import React,{useState} from 'react'
import {TextInput, View, StyleSheet, Button} from 'react-native';

export default function AddToDo({addTask}) {
    const [text, setText]  = useState('');
    const changeHandler = (text)=>{
        setText(text);
    }
    return (
        <View>
            <TextInput placeholder = "eg. shooping" style = {styles.input} onChangeText = {(val)=>changeHandler(val)} />
            <Button title = 'Add Task' onPress = {()=> addTask(text)} color = 'blue' />
        </View>
    )
}
const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal:8,
        paddingVertical : 6,
        borderBottomWidth : 2,
        borderBottomColor : '#bbb',
    }
 })