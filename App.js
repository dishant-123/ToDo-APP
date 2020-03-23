import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/toDoItem'
import AddToDo from './components/addToDo'

export default function App()
{
    const [todos,setTodos] = useState([
        {task : 'Go To Shooping', key : '1'},
        {task : 'Do Maditation', key : '2'},
        {task : 'Go For Dinnner', key : '3'},
    ]);
    const pressHandler =(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(item => item.key != key)
        })
    }
    const addTask = (text) =>{
        
        if(text.length > 3)
        {
            setTodos((prevTodDos)=>{
                return [
                    
                    {task : text, key : Math.random().toString()},
                    ...prevTodDos,
                    
                ]
            })
        }
        else{
            Alert.alert('OOPS! Task length mush be atleast two character long.');
        }
    }
    return (
        <TouchableWithoutFeedback onPress = {()=> Keyboard.dismiss()}>
            <View style = {styles.container}>
                <Header />
                <View style = {styles.content}>
                    <AddToDo addTask = {addTask}/>
                    <View style = {styles.list}>
                        <FlatList data = {todos} renderItem = { ({item }) => (
                            <ToDoItem item = {item} pressHandler = {pressHandler}/>
                        )
                        }/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
    },
    content : {
        flex: 1,
        padding : 40,
    },
    list : {
        flex:1,
        marginTop : 30,
    },
})
