import {combineReducers} from 'redux';

import todo from './Todo/reducer'
import editTodoReducer from './Todo/editTodoReducer'

export default combineReducers({
  todo,
  editTodoReducer,
})