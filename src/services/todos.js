import React, {
  Component,
  createContext,
  useState,
  useContext,
  useCallback
} from "react";

const TodosContext = createContext();

export const TodosConsumer = TodosContext.Consumer;

export function useTodosService() {
  return useContext(TodosContext);
}

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

export function TodosService({ children }) {
  const [todos, setTodos] = useState(TODOS);
  const toggleTodo = useCallback(todoId => {
    setTodos(todos =>
      todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }, []);

  const deleteTodo = useCallback(todoId => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  }, []);

  const markAllAsDone = () =>
    setTodos(todos.map(todo => ({ ...todo, completed: true })));

  const deleteDone = () => setTodos(todos.filter(todo => !todo.completed));

  const addTodo = text => {
    const todo = createTodo(text);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const ctx = {
    todos,
    addTodo,
    toggleTodo,
    deleteDone,
    deleteTodo,
    markAllAsDone
  };

  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>;
}

export class TodosServiceLegacy extends Component {
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
    const addTodo = this.addTodo;
    const todos = this.state.todos;
    const toggleTodo = this.toggleTodo;
    const deleteTodo = this.deleteTodo;
    const markAllAsDone = this.markAllAsDone;
    const deleteDone = this.deleteDone;

    const ctx = {
      todos,
      addTodo,
      toggleTodo,
      deleteDone,
      deleteTodo,
      markAllAsDone
    };

    return (
      <TodosContext.Provider value={ctx}>
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}
