// BotonCustom.js
import React from 'react';
import { Button, TouchableOpacity, Pressable, Text, StyleSheet } from 'react-native';

const BotonCustom = ({ variant, label, onPress }) => {
  if (variant === 'button') {
    return <Button title={label} onPress={onPress} />;
  }

  if (variant === 'touchable') {
    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Text style={styles.touchText}>{label}</Text>
      </TouchableOpacity>
    );
  }

  if (variant === 'pressable') {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressedState,
        ]}
        onPress={onPress}
      >
        <Text style={styles.pressText}>{label}</Text>
      </Pressable>
    );
  }

  return null;
};

export default BotonCustom;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#9c27b0',
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  touchText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  pressable: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#4caf50',
  },
  pressedState: {
    backgroundColor: '#388e3c',
  },
  pressText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});