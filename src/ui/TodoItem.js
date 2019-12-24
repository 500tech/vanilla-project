import React, { PureComponent } from "react";
import { noop } from "ui/common";

/*
interface Todo {
  id: number;
  title: string;
  completed: bool;
}
*/

export class TodoItem extends PureComponent {
  render() {
    const { todo, onToggle = noop, onDelete = noop } = this.props;
    return (
      <li
        tabIndex={0}
        className={todo.completed ? "done" : ""}
        onClick={({ metaKey }) => {
          if (metaKey) {
            onDelete(todo.id);
          } else {
            onToggle(todo.id);
          }
        }}
      >
        {todo.title}
      </li>
    );
  }
}
