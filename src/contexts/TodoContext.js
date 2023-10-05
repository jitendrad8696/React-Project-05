import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
