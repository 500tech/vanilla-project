import React, {
  useState,
  useEffect,
  useCallback,
  FunctionComponent
} from "react";
import { noop } from "utils";
import { Button, Input } from "ui/atoms";
import { useAutofocus } from "hooks/autofocus";

const isValid = (text: string) => text.length > 0;

interface Props {
  onAddTodo?: (text: string) => void;
}

export const TodoAdder: FunctionComponent<Props> = function TodoAdder({
  onAddTodo = noop
}) {
  const [text, setText] = useState("");
  const input = useAutofocus();
  useEffect(() => {
    if (text.match(/clear/i)) {
      setText("");
    }
  }, [text]);
  const submitText = useCallback(
    text => {
      if (isValid(text)) {
        onAddTodo(text);
        setText("");
      }
    },
    [onAddTodo]
  );
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
};
