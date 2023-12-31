import React, { useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";

function Card({ eachTodo }) {
  const [todo, setTodo] = useState(eachTodo.todo);
  const [isEditEnable, setIsEditEnable] = useState(true);
  const [editLabel, setEditLabel] = useState("EDIT");
  const [isDone, setIsDone] = useState(eachTodo.isComplete);

  const { editTodo, deleteTodo, completeTodo } = useTodoContext();
  const edit = () => {
    if (isEditEnable) {
      setIsEditEnable(false);
      setEditLabel("SAVE");
    } else {
      editTodo(todo);
      setEditLabel("EDIT");
      setIsEditEnable(true);
    }
  };
  return (
    <div className="card">
      <input
        className="card-checkbox"
        type="checkbox"
        disabled={isDone}
        checked={isDone}
        onChange={() => {
          setIsDone(true);
          completeTodo(eachTodo.id);
        }}
      />
      <input
        className="card-input"
        type="text"
        value={todo}
        disabled={isEditEnable || isDone === true}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="card-button" onClick={edit}>
        {editLabel}
      </button>
      <button
        className="card-button"
        onClick={() => {
          deleteTodo(eachTodo.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Card;
