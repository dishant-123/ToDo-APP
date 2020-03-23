import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';


export default function mapListHooks()
{
    const [people, setPeople] = useState([
        {name : 'Dishant', id :  '1'},
        {name : 'Devik', id :  '2'},
        {name : 'Dilvar', id :  '3'},
        {name : 'Deepanshu', id :  '4'},
        {name : 'Rohit', id :  '5'},
        {name : 'Sandesh', id :  '8'},
    ])
    const pressHandler = (id) =>{
        console.log(id);
        setPeople((prevPeople)=>{
            return prevPeople.filter(person => person.id != id)
        })
    }
    return (
        <View style = {styles.container1}>
            {/* <ScrollView>
                {
                    people.map((item) =>{
                        return (
                            <View key = {item.key}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView> */}
            <FlatList data = {people}  keyExtractor = {(item) => item.id} renderItem = {({item}) => (
                <TouchableOpacity onPress = {()=> pressHandler(item.id)}>
                    <Text style = {styles.text}>{item.name}</Text>
                </TouchableOpacity>
            )
            }/>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal : 20

    },
    text : {
        backgroundColor : 'pink',
        padding : 40,
        marginTop:30,
        fontSize : 20,
    },

})