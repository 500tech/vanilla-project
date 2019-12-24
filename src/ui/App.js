import React, { Component } from "react";
import { Header, Footer, MainSection } from "ui/layout";
import { PageControls } from "ui/PageControls";
import { TodoAdder } from "ui/TodoAdder";
import { TodoList } from "ui/TodoList";

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

const TODOS = [
  createTodo("Have morning coffee", true),
  createTodo("Eat lunch", true),
  createTodo("Make awesome things happen")
];

export class App extends Component {
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

  markAllAsDone = () =>
    this.setState({
      todos: this.state.todos.map(todo => ({ ...todo, completed: true }))
    });

  deleteDone = () =>
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });

  addTodo = text => {
    const todo = createTodo(text);
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header>ExCo.</Header>
        <MainSection heading="My Todos List">
          <TodoAdder onAddTodo={this.addTodo} />
          <TodoList
            todos={todos}
            onToggle={this.toggleTodo}
            onDelete={this.deleteTodo}
          />
          <PageControls
            todos={todos}
            onMarkAllAsDone={this.markAllAsDone}
            onDeleteDone={this.deleteDone}
          />
        </MainSection>
        <Footer copyrightExpiary={2058} name="Example Corporation" />
      </>
    );
  }
}
