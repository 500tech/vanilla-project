import React, { PureComponent } from "react";
import styled from "styled-components";
import { noop } from "ui/common";

/*
interface Todo {
  id: number;
  title: string;
  completed: bool;
}
*/

class BaseTodoItem extends PureComponent {
  render() {
    const { todo, onToggle = noop, onDelete = noop, className } = this.props;
    return (
      <li
        tabIndex={0}
        className={className}
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

export const TodoItem = styled(BaseTodoItem)`
  :focus {
    outline: none;
    text-decoration: underline
      ${props => (props.todo.completed ? "line-through" : "")};
    list-style-type: circle;
  }

  text-decoration: ${props => (props.todo.completed ? "line-through" : "none")};
`;
