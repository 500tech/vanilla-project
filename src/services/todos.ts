import { useAction, useSelector } from "services/utils";
import { todosActions } from "data/todos";
import { Dispatch } from "react";

const fetchTodosThunk = () => async (dispatch: Dispatch<any>) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  dispatch(todosActions.setTodos(todos));
};

const postTodoThunk = (title: string) => async (dispatch: Dispatch<any>) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  });
  const todo = await response.json();
  dispatch(todosActions.addTodo(todo));
};

export function useTodosService() {
  const todos = useSelector(({ todos }) => todos);
  const addTodo = useAction(postTodoThunk);
  const toggleTodo = useAction(todosActions.toggleTodo);
  const deleteTodo = useAction(todosActions.deleteTodo);
  const markAllAsDone = useAction(todosActions.markAllAsDone);
  const deleteDone = useAction(todosActions.deleteDone);
  const fetchTodos = useAction(fetchTodosThunk);
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteDone,
    deleteTodo,
    markAllAsDone,
    fetchTodos
  };
}
