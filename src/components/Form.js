import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Input from './input';
import { connect, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

function Form ({todoSize = 0,todo}) {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

  function onChangeText(text) {

    dispatch({
      type: "SET_TODO",
      text
    })
    setText(text)
  }

  function onPress (todo) {

    if (todo.id && todo.text !== '') {
   // console.log('UPDATE_TODO', todo.id)
   
       dispatch({
        type: "UPDATE_TODO",
        todo,
      })

    } else {
      dispatch({
        type: "ADD_TODO",
        text
      })
    }
    setText('') /*state */
  }

    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            value={todo.text}
            onChangeText={text => onChangeText(text)}
            onSubmitEditing={() => onPress(todo)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => onPress(todo)}
          >
            <Ionicons
                name={todo.id ? 'save' : "add-circle-sharp" }
                size={40} color="#157efb"
            />

          </TouchableOpacity>
          <Text style={styles.total}>{todoSize}</Text>

        </View>
      </View>
    )
}

export default connect(state => ({
  todoSize: state.todo.length,
  todo: state.editTodoReducer
}))(Form);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: 'row',
  },
  input: {
    flex: 4,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
  },

  total: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})