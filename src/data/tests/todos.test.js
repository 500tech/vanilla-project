import { PRESTATE, ANY_ACTION, createGivenWhenThenForData } from "test-utils";
import { todosActions, todosReducer } from "data/todos";

describe("todosReducer", () => {
  let todos, todo, index;
  const {
    setup,
    runReducerForActions,
    expectNewStateToBeTheAssertedState,
    expectStateToHaveChanged,
    getState
  } = createGivenWhenThenForData(todosReducer);

  it("should should have the correct initial state", () => {
    given: setup(PRESTATE);
    when: runReducerForActions([ANY_ACTION]);
    then: expectNewStateToBeTheAssertedState([]);
  });

  it("should set to state", () => {
    given: setupTodos();
    when: runReducerForActions([todosActions.setTodos([])]);
    then: expectNewStateToBeTheAssertedState([]);
  });

  it("should toggle", () => {
    given: setupTodos();
    when: runReducerForActions([todosActions.toggleTodo(todo.id)]);
    then: {
      expectStateToHaveChanged();
      todos[index].completed = !todos[index].completed;
      expectNewStateToBeTheAssertedState(todos);
    }
  });

  it("should delete", () => {
    given: setupTodos();
    when: runReducerForActions([todosActions.deleteTodo(todo.id)]);
    then: {
      expectStateToHaveChanged();
      todos.splice(index, 1);
      expectNewStateToBeTheAssertedState(todos);
    }
  });

  it("should mark all as done", () => {
    given: setupTodos();
    when: runReducerForActions([todosActions.markAllAsDone()]);
    then: {
      expect(todos.some(todo => !todo.completed)).toBeTruthy();
      expect(getState().every(todo => todo.completed)).toBeTruthy();
    }
  });

  function setupTodos() {
    todos = generateRaondomTodoList();
    todo = getTodo(todos);
    index = todos.indexOf(todo);
    setup(todos);
  }
});

function generateRaondomTodo() {
  const id = Math.round(Math.random() * 1000000);
  const title = new Array(Math.round(Math.random() * 10)).fill("a").join("");
  const completed = !!Math.round(Math.random());
  return { id, title, completed };
}

function generateRaondomTodoList() {
  return Array.from({ length: Math.round(Math.random() * 100) }).map(
    generateRaondomTodo
  );
}

function getTodo(todos) {
  const index = Math.floor(Math.random() * todos.length);
  const todo = todos[index];
  return todo;
}
