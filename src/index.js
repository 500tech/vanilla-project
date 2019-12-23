import React, { Component } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./layout.css";
import "./todos.css";

/*
interface Todo {
  id: number;
  title: string;
  completed: bool;
}
*/

let _id = 0;
const getId = () => _id++;
const createTodo = (title, completed = false) => ({
  title,
  completed,
  id: getId()
});
const noop = () => null;

const TODOS = [
  createTodo("Have morning coffee", true),
  createTodo("Eat lunch", true),
  createTodo("Make awesome things happen")
];

class TodoItem extends Component {
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

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

class App extends Component {
  state = {
    todos: TODOS
  };

  toggleTodo = todoId => {
    const { todos } = this.state;
    const todosAfterChange = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({
      todos: todosAfterChange
    });
  };

  deleteTodo = todoId => {
    const { todos } = this.state;
    const todosAfterChange = todos.filter(todo => todo.id !== todoId);
    this.setState({
      todos: todosAfterChange
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header>ExCo.</Header>
        <MainSection heading="My Todos List">
          <TodoAdder />
          <TodoList
            todos={todos}
            onToggle={this.toggleTodo}
            onDelete={this.deleteTodo}
          />
          <PageControls />
        </MainSection>
        <Footer copyrightExpiary={2058} name="Example Corporation" />
      </>
    );
  }
}

function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

function Footer({ copyrightExpiary, name }) {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const showFooter = year <= copyrightExpiary;
  if (!showFooter) {
    return null;
  }
  return (
    <footer>
      <small>
        &copy; Copyright {copyrightExpiary}, {name}
      </small>
    </footer>
  );
}

function MainSection({ children, heading }) {
  return (
    <main id="todos-section">
      <h2>{heading}</h2>
      {children}
    </main>
  );
}

function PageControls() {
  return (
    <section className="controls">
      <button id="mark-done">Mark all as done</button>
      <button id="delete-done">Delete all done</button>
    </section>
  );
}

function TodoAdder() {
  return (
    <section>
      <form id="todo-adder">
        <input
          type="text"
          name="todo"
          placeholder="Write up your todos"
          required
        />
        <button>Add</button>
      </form>
    </section>
  );
}

ReactDOM.render(
  <App subheaderColor="blue" showSubheader />,
  document.getElementById("root")
);
