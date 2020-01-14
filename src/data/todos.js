import { createSlice } from '@reduxjs/toolkit';

/*
interface Todo {
  id: number;
  title: string;
  completed: bool;
}
*/

const { reducer, actions } = createSlice({
  name: 'todos',
  initialState: [],
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
    addTodo(todos, { payload: todo }) {
      todos.unshift(todo);
    },
    setTodos(_, { payload }) {
      return payload;
    },
  },
});

export const todosReducer = reducer;
export const todosActions = actions;
