import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo , updateTodo } = this.props;
    const { title } = todo;
    const { body } = todo;

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h2>{ title }</h2>
          <h3>{ body }</h3>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
