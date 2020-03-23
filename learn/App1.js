import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App1() {
  const [name, setName] = useState('Dishant'); //react hooks
  const [person, setPerson] = useState({name:'Dishant', age:19});
  function changeName()
  {
      setName('Dishant Dua');
  }
  function changePerson()
  {
    setPerson({name:'Tarun',age:24});
  }
  return (
    <View style={styles.container}>
      {/* <Text>Welcome in starting learning react native app!!</Text>
      <View style = {styles.header}>
        <Text>I am Dishant</Text>
      </View>
      <View style = {styles.header}>
        <Text>I am From Haryana</Text>
      </View> */}
      <Text>My Name is {person.name} Age is {person.age}</Text>
      <Button title = 'Click Me' onPress = {changePerson} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'pink',
    borderColor : 'black',
    padding : 50,
    marginTop:20,
  },
});
