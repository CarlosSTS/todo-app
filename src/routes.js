import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppStack = createStackNavigator();

import Todo from "./pages/Todo";
import { connect, useDispatch } from "react-redux";

import deleteTodos from "./utils/deleteTodos";
import screenOptions from "./constants/screenOptions";

const Routes = ({ todo }) => {
  const dispatch = useDispatch();

  function deleteTodo() {
    dispatch({
      type: "DELETE_TODO",
    });
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen
          name="Todo"
          component={Todo}
          options={{
            title: `Total de to-dos: ${todo.length}`,
            headerRight: () => (
              <MaterialCommunityIcons
                style={{ marginRight: 50 }}
                name="trash-can"
                size={32}
                color="#fff"
                onPress={() => deleteTodos(todo, deleteTodo)}
              />
            ),
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default connect((state) => ({
  todo: state.todo,
}))(Routes);
