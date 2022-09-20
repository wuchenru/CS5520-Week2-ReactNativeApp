import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Input(props) {
  const [text, setText] = useState('');


  // props.onAdd()
  return (
    <View>

      <TextInput

        onChangeText = {t => {
            setText(t);
            // props.onAdd(t);
        }}
        value = {text}
        placeholder = 'Type ConsoleLog Something!!'
        keyboardType = 'default'
      />

      <Button title="Confirm" onPress={() => {
          props.onAdd(text);
          setText('')
          }} />
    </View>
  )
}