import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.uniqueId(),
      title: '',
      body: ''
    };
    this.uniqueId = this.uniqueId.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submit = this.submit.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    const { receiveTodo } = this.props;
    receiveTodo(this.state);
    this.setState({
        title: '',
        body: ''
    });
  }

  render() {
    return (
      <form>
        <input onChange={this.updateTitle} value={this.state.title} />
        <input onChange={this.updateBody} value={this.state.body} />
        <button onClick={this.submit}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
