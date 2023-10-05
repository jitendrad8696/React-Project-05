import React, { useId, useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";

function InputBox() {
  const [eachTodo, setEachTodo] = useState("");

  let { addTodo } = useTodoContext();

  const add = () => {
    if (!eachTodo) return;
    addTodo(eachTodo);
    setEachTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={eachTodo}
        onChange={(e) => setEachTodo(e.target.value)}
      />
      <br />
      <button onClick={add}>Add Todo</button>
    </div>
  );
}

export default InputBox;
