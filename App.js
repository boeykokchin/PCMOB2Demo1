import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  let [count, setCount] = useState(0);
  let [firstNumber, setFirstNumber] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);

  let addButtonPressed = () => {
    setCount((count += 1));
  };

  let minusButtonPressed = () => {
    setCount((count -= 1));
  };

  let resetButtonPressed = () => {
    setCount(0);
    setFirstNumber((firstNumber = Math.floor(Math.random() * 100)));
    setCorrectAnswer((correctAnswer = Math.floor(Math.random() * 30)));
  };

  let showResultText = () => {
    if (!(count === correctAnswer)) {
      return 'Answer?';
    } else {
      return 'Correct!';
    }
  };

  return (
    <View style={[styles.container, { marginTop: 70 }]}>
      <TouchableOpacity onPress={resetButtonPressed}>
        <View style={styles.buttonRow}>
          <View style={[styles.boxNumber, { backgroundColor: 'blue' }]}>
            <Text style={{ fontSize: 50 }}>{firstNumber}</Text>
          </View>
          <View style={[styles.boxSign, { backgroundColor: 'purple' }]}>
            <Text style={{ fontSize: 50 }}>+</Text>
          </View>
        </View>

        <View
          style={{
            borderStyle: 'solid',
            borderRadius: 10,
            borderWidth: 4,
            borderColor: 'orange',
          }}
        >
          <Text
            style={{
              fontSize: 70,
              color: 'white',
              textAlign: 'center',
            }}
          >
            {count}
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <View style={[styles.boxSign, { backgroundColor: 'purple' }]}>
            <Text style={{ fontSize: 50 }}>=</Text>
          </View>
          <View style={[styles.boxNumber, { backgroundColor: 'blue' }]}>
            <Text style={{ fontSize: 50 }}>{firstNumber + correctAnswer}</Text>
          </View>
        </View>

        <Text style={styles.text}>{showResultText()}</Text>

        <View style={[styles.buttonRow, { marginTop: 100, marginBottom: 90 }]}>
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: 'green' }]}
            onPress={addButtonPressed}
          >
            <Text style={{ fontSize: 60, color: 'white' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: 'red' }]}
            onPress={minusButtonPressed}
          >
            <Text style={{ fontSize: 80, color: 'white' }}>-</Text>
          </TouchableOpacity>
        </View>

        {
          //   <View style={styles.buttonRow}>
          //   <TouchableOpacity
          //     style={[
          //       styles.circleButton,
          //       { borderColor: 'red', borderWidth: 6, borderStyle: 'solid' },
          //     ]}
          //     onPress={resetButtonPressed}
          //   >
          //     <Text style={{ fontSize: 50, color: 'red' }}>R</Text>
          //   </TouchableOpacity>
          // </View>
        }
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
    marginTop: 40,
    marginBottom: 10,
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
    // borderColor: 'orange',
    // borderWidth: 6,
    // borderStyle: 'solid',
    borderRadius: 100,
  },

  boxNumber: {
    margin: 1,
    padding: 5,
    height: 130,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  boxSign: {
    margin: 1,
    padding: 5,
    height: 130,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
