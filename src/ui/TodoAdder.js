import React, { Component, createRef } from "react";
import { Button, Input, noop } from "ui/common";

export class TodoAdder extends Component {
  state = {
    text: ""
  };

  input = createRef();

  componentDidMount() {
    this.input.current.focus();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      clearTimeout(this.autoSubmitTimer);
      this.autoSubmitTimer = setTimeout(this.submit, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.autoSubmitTimer);
  }

  setText(text) {
    if (text.match(/clear/i)) {
      return this.setText("");
    }
    this.setState({ text });
  }

  updateText = e => {
    const text = e.target.value;
    this.setText(text);
  };

  isValid = () => {
    return this.state.text.length > 0;
  };

  submit = e => {
    e && e.preventDefault();
    if (this.isValid()) {
      const { text } = this.state;
      const { onAddTodo = noop } = this.props;
      onAddTodo(text);
      this.setText("");
    }
  };

  render() {
    const { text } = this.state;
    return (
      <section>
        <form onSubmit={this.submit}>
          <Input
            ref={this.input}
            type="text"
            name="todo"
            placeholder="Write up your todos"
            required
            onChange={this.updateText}
            value={text}
          />
          <Button disabled={!this.isValid()}>Add</Button>
        </form>
      </section>
    );
  }
}
