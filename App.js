import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [count, setCount] = useState(0);

  let buttonPressed = () => {
    // console.log("I am touched...");
    // console.log(`Before pressing, the count was ${count}`);
    setCount(count +1);
  } 

  return (
    <View style={styles.container}>
    <View style={styles.fillerContainer}></View>  
    <View style={styles.innerContainer}>
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text}>Helloooo...</Text>
      <Button title="Touch Me Now!" onPress={buttonPressed}></Button>
    </View>  
    <StatusBar style="auto" />
    <View style={styles.fillerContainer}></View>  
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
  
  text: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
  
  fillerContainer: {
    flex: 0.25,
    backgroundColor: "blue",
    width: "50%",
    margin: 40,
  },
  
  innerContainer: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
  }
});
