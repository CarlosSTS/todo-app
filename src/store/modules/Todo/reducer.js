import { Alert } from "react-native";

let nextId = 1;
export default function todo(state = [], action) {
  switch (action.type) {
    /* adicionando todo */
    case "ADD_TODO":
      const newTodo = {
        id: nextId++,
        text: action.text,
        done: false,
      };
      if (!newTodo.text) {
        Alert.alert("Aviso", "Todo vazio", [
          {
            text: 'Digite algo',
            onPress: () => {},
            style: 'default'
          }
        ], { cancelable: false });
        nextId--;
        return state;
      }
      return [...state, newTodo];

    case "DELETE_TODO": {
      // console.log("DELETE_TODO", action.todo);
      while (state.length > 0) {
        state.pop();
      }
      return state;
    }

    case "UPDATE_TODO": {
      // console.log("UPDATE_TODO: ", action.todo);
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        }
        return todo;
      });
    }

    case "TOGGLE_TODO": {
      /*finalizando todo */
      return state.map((todo) => {
        if (todo.id === action.todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    }

    default:
      return state;
  }
}
