import React from 'react';
import ReactDOM from 'react-dom';

const TodoListItem = (props) => (
  <li key={props.idx}>{props.todo.title}</li>
);

export default TodoListItem;
