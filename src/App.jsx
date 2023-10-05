import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import { InputBox, Card } from "./components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), isComplete: false, todo },
    ]);
  };

  const editTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todo } : eachTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, isComplete: !eachTodo.isComplete }
          : eachTodo
      )
    );
  };

  useEffect(() => {
    const oldTodos = JSON.parse(localStorage.getItem("todos"));
    if (oldTodos && oldTodos.length > 0) {
      setTodos(oldTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, editTodo, deleteTodo, completeTodo }}
    >
      <InputBox />

      {todos.map((eachTodo) => (
        <div key={eachTodo.id}>
          <Card eachTodo={eachTodo} />
        </div>
      ))}
    </TodoContextProvider>
  );
}

export default App;
