import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <li tabIndex={0} className={className}>
        <span
          onClick={({ metaKey }) => {
            if (metaKey) {
              onDelete(todo.id);
            } else {
              onToggle(todo.id);
            }
          }}
        >
          {todo.title}
        </span>
        <Link to={`/todos/${todo.id}`}>Select</Link>
      </li>
    );
  }
}

export const TodoItem = styled(BaseTodoItem)`
  :focus {
    outline: none;

    list-style-type: circle;
  }

  span {
    text-decoration: ${props =>
      props.todo.completed ? "line-through" : "none"};
    :focus {
      text-decoration: underline
        ${props => (props.todo.completed ? "line-through" : "")};
    }
  }

  a {
    margin-left: 5px;
  }
`;
