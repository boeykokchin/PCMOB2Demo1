import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CounterText(props) {
  return (
    <Text
      style={[
        styles.counterText,
        { textAlign: 'center', color: props.color, fontSize: props.fontSize },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontWeight: 'bold',
  },
});
