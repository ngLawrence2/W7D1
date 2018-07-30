import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { receiveTodo, receiveTodos } from './action/todo_actions';
// import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;

  ReactDOM.render(<Root store={store}/> , root);
});
