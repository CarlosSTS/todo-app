import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Input from './input';
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

class Form extends Component {
state ={
  text : ''
}
  onChangeText(text) {
    const { dispatch } = this.props;

    dispatch({
      type: "SET_TODO",
      text
    })
    this.setState({
      text
    })
  }

  onPress = todo => {
    const {dispatch} = this.props;
    const {text} = this.state

    if (todo.id && todo.text !== '') {
    console.log('UPDATE_TODO', todo.id)
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
    this.setState({ text: ''}) /*state */
  }

  render() {
    const {todoSize} = this.props
    const {text} = this.props.todo
    const {todo} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            value={text}
            onChangeText={text => this.onChangeText(text)}
            onSubmitEditing={() => this.onPress(todo)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => this.onPress(todo)}
          >
            <Ionicons
                name={todo.id ? 'save' : "add-circle-sharp" }
                size={40} color="#157efb"
            />

          </TouchableOpacity>
          <Text style={styles.total}>{todoSize ? todoSize : 0}</Text>

        </View>
      </View>
    )
  }
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