const INITIAL_STATE = {
  id: null,
  text: "",
  done: false,
};

export default function editTodo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TODO": {
      // console.log("SET_TODO: ", action.text);
      return {
        ...state,
        text: action.text,
      };
    }

    case "UPDATE_TODO": {
      return INITIAL_STATE.text;
    }
    case "ADD_TODO": {
      return INITIAL_STATE;
    }

    case "SET_EDITING_TODO": {
      // console.log("SET_EDITING_TODO: ", action.todo);
      return action.todo;
    }

    default:
      return state;
  }
}
