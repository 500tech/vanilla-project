import { useSelector } from "react-redux";
import { useAction } from "services/utils";
import { todosActions } from "data/todos";

export function useTodosService() {
  const todos = useSelector(({ todos }) => todos);
  const addTodo = useAction(todosActions.addTodo);
  const toggleTodo = useAction(todosActions.toggleTodo);
  const deleteTodo = useAction(todosActions.deleteTodo);
  const markAllAsDone = useAction(todosActions.markAllAsDone);
  const deleteDone = useAction(todosActions.deleteDone);
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteDone,
    deleteTodo,
    markAllAsDone
  };
}
