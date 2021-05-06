import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import { connect } from 'react-redux';
import styles from './styles'

class TodoList extends Component {

  onPress = todoId => {
    const { dispatch } = this.props;

    dispatch({
      type: "TOGGLE_TODO",
      todoId,
    })
  }

    onPressEdit = todo => {
        const { dispatch } = this.props;

        dispatch({
            type: "SET_EDITING_TODO",
            todo,
        })
    }

  render() {
    const { todo } = this.props;
    return (
      <>
        <FlatList
          style={styles.container}
          data={todo}
          keyExtractor={todo => String(todo.id)}
          renderItem={({ item: todo }) => (
            <TouchableOpacity
              onPress={() => this.onPress(todo.id)}>
              <View style={styles.line}>

                <Text style={[
                  styles.lineText,
                  todo.done && styles.lineThough,
                   todo.text.length > 20 && styles.lengthText 
                ]}>
                    {todo.id}) {todo.text}
                </Text>
                <View style={styles.icon}>
                  <AntDesign
                      name="checkcircle"
                      size={34}
                      color={todo.done ? "#074885" : "#999"}
                  />
                  <Entypo
                      onPress={() => this.onPressEdit(todo)}
                      style={styles.editIcon}
                      name="edit"
                      size={34}
                      color={todo.done ? "#666" : "#000"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    )
  }
}
const mapStateToProps = state => ({
  todo: state.todo,
})


export default connect(mapStateToProps)(TodoList);