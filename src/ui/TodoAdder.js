import React, {
  Component,
  createRef,
  useState,
  useEffect,
  useCallback
} from "react";
import { Button, Input, noop } from "ui/common";
import { useAutofocus } from "hooks/autofocus";

const isValid = text => text.length > 0;

export function TodoAdder({ onAddTodo = noop }) {
  const [text, setText] = useState("");
  const input = useAutofocus();
  useEffect(() => {
    if (text.match(/clear/i)) {
      setText("");
    }
  }, [text]);
  const submitText = useCallback(text => {
    if (isValid(text)) {
      onAddTodo(text);
      setText("");
    }
  }, [onAddTodo]);
  useEffect(() => {
    const timer = setTimeout(submitText, 3000, text);
    return () => clearTimeout(timer);
  }, [submitText, text]);

  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitText(text);
        }}
      >
        <Input
          ref={input}
          type="text"
          name="todo"
          placeholder="Write up your todos"
          required
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Button disabled={!isValid(text)}>Add</Button>
      </form>
    </section>
  );
}

export class TodoAdderLegacy extends Component {
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
