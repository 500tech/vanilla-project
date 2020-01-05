import { createSlice } from "@reduxjs/toolkit";

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

const { reducer, actions } = createSlice({
  name: "todos",
  initialState: TODOS,
  reducers: {
    toggleTodo(todos, { payload: todoId }) {
      const todo = todos.find(todo => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(todos, { payload: todoId }) {
      return todos.filter(todo => todo.id !== todoId);
    },
    markAllAsDone(todos) {
      return todos.map(todo => ({ ...todo, completed: true }));
    },
    deleteDone(todos) {
      return todos.filter(todo => !todo.completed);
    },
    addTodo(todos, { payload: text }) {
      todos.unshift(createTodo(text));
    }
  }
});

export const todosReducer = reducer;
export const todosActions = actions;
