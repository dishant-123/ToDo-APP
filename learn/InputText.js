import React,{useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function InputText()
{
    const [name, setName] = useState('Dishant');
    const [age, setAge] = useState(20);
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Enter Name : </Text>
            <TextInput multiline style = {styles.input} placeholder = "eg. Andrew" onChangeText = {(val)=>setName(val)} autoCompleteType = "name"/>
            
            <Text style = {styles.text}>Enter Age : </Text>
            <TextInput keyboardType = 'numeric' style = {styles.input} placeholder = "eg . 20" onChangeText = {(val)=>setAge(val)}/>
            <Text>name : {name} Age : {age}</Text>
        </View>
    
    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input : {
        borderWidth : 1,
        borderColor : '#777',
        padding : 8,
        margin : 10,
        width : 200,
    },
    text : {
        fontSize : 20,
    }

})