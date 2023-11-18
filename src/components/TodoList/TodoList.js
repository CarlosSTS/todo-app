import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { connect, useDispatch } from "react-redux";
import styles from "./styles";

const TodoList = ({ todo = [] }) => {
  const dispatch = useDispatch();

  function onPress(todoId) {
    dispatch({
      type: "TOGGLE_TODO",
      todoId,
    });
  }

  function onPressEdit(todo) {
    dispatch({
      type: "SET_EDITING_TODO",
      todo,
    });
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={todo}
        keyExtractor={(todo) => String(todo.id)}
        ListEmptyComponent={<Text style={styles.nothing}>Nenhum to-do criado</Text>}
        renderItem={({ item: todo }) => (
          <TouchableOpacity onPress={() => onPress(todo.id)}>
            <View style={styles.line}>
              <Text
                style={[
                  styles.lineText,
                  todo.done && styles.lineThough,
                  todo.text.length > 20 && styles.lengthText,
                ]}
              >
                {todo.id}) {todo.text}
              </Text>
              <View style={styles.icon}>
                <AntDesign
                  name="checkcircle"
                  size={34}
                  color={todo.done ? "#074885" : "#999"}
                />
                <Entypo
                  onPress={() => onPressEdit(todo)}
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
    </View>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(TodoList);
