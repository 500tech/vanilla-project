import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "ui/layout";
import { Home } from "ui/Home";
import { Todos } from "ui/Todos";
import { PageNotFound } from "ui/PageNotFound";
import { lightTheme, darkTheme } from "themes";

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

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;

export class App extends Component {
  state = {
    todos: TODOS,
    theme: lightTheme
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

  toggleTheme = () =>
    this.setState({
      theme: this.state.theme === lightTheme ? darkTheme : lightTheme
    });

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Header onClick={this.toggleTheme}>ExCo.</Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/todos"
              render={() => {
                return (
                  <Todos
                    addTodo={this.addTodo}
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                    markAllAsDone={this.markAllAsDone}
                    deleteDone={this.deleteDone}
                  />
                );
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
          <Footer copyrightExpiary={2058} name="Example Corporation" />
        </MainContainer>
      </ThemeProvider>
    );
  }
}
