import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({type: RECEIVE_TODOS, todos});
export const receiveTodo = todo => ({type: RECEIVE_TODO, todo});

export const fetchTodos = () => dispatch => {
  console.log('helloooooo',TodoAPIUtil.fetchTodos());
  return TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};
