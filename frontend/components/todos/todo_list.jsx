import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos, receiveTodo }) => {
    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          {todos.map((todo, idx) => <TodoListItem idx={idx}/>)}
        </ul>
      </div>
    );
};

export default TodoList;
