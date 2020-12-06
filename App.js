import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  let [count, setCount] = useState(0);

  let addButtonPressed = () => {
    setCount((count += 1));
  };

  let minusButtonPressed = () => {
    setCount((count -= 1));
  };

  let resetButtonPressed = () => {
    setCount(0);
  };

  let showEncouragingText = () => {
    if (count >= 30) {
      return 'You touch me 30 times! I liked!';
    } else if (count >= 20) {
      return 'You touch me 20 times already!';
    } else if (count >= 10) {
      return 'You touch me 10 times now!';
    } else {
      return "Can't touch this!";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={resetButtonPressed}>
        <Text style={{ fontSize: 70, color: 'white', textAlign: 'center' }}>
          {count}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={addButtonPressed}
          >
            <Text style={{ fontSize: 60, color: 'green' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={minusButtonPressed}
          >
            <Text style={{ fontSize: 80, color: 'red' }}>-</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>{showEncouragingText()}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={resetButtonPressed}
          >
            <Text style={{ fontSize: 50, color: 'red' }}>R</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 70,
    textAlign: 'center',
  },

  fillerContainer: {
    flex: 0.25,
    backgroundColor: 'blue',
    width: '50%',
    margin: 40,
  },

  innerContainer: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
  },

  circleButton: {
    margin: 10,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 100,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
