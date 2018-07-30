import { RECEIVE_TODOS, RECEIVE_TODO } from '../action/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {

  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.map(todo => {
        newState[todo.id] = todo.todo;
      });
      return newState;
    case RECEIVE_TODO:
      const states = Object.assign({}, state);
      states[action.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
