import React, { memo, FunctionComponent } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { noop } from "utils";
import { Todo } from "types";

interface TodoItemProps {
  todo: Todo;
  onToggle?: (todoId: Todo["id"]) => void;
  onDelete?: (todoId: Todo["id"]) => void;
  className?: string;
}

const BaseTodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  onToggle = noop,
  onDelete = noop,
  className
}) => {
  return (
    <li
      tabIndex={0}
      className={className}
      onKeyDown={e => {
        if (e.key === "Backspace") {
          onDelete(todo.id);
        } else if (e.key === " ") {
          onToggle(todo.id);
        }
      }}
    >
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
};

export const TodoItem = styled(memo(BaseTodoItem))`
  :focus {
    outline: none;

    list-style-type: circle;

    span {
      text-decoration: underline
        ${props => (props.todo.completed ? "line-through" : "")};
    }
  }

  * {
    color: ${props => props.theme.colors.secondary};
  }

  span {
    text-decoration: ${props =>
      props.todo.completed ? "line-through" : "none"};
  }

  a {
    margin-left: 5px;
  }
`;

TodoItem.propTypes = {
  onToggle: propTypes.func,
  onDelete: propTypes.func,
  todo: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired
  }).isRequired
};
