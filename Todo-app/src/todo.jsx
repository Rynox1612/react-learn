import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [todos, setTodos] = useState([
    { task: "Sample-task", id: uuidv4(), isdone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  function markAsDone(id) {
    let newTodos = todos.map((prevTodo) => {
      if (prevTodo.id == id) {
        return { ...prevTodo, isdone: true };
      } else {
        return prevTodo;
      }
    });
    setTodos(() => newTodos);
  }

  function markAllDone() {
    setTodos(() => todos.map((prevTodo) => ({ ...prevTodo, isdone: true })));
  }

  function deleteTodo(id) {
    let updTodos = todos.filter((prevTodos) => {
      return prevTodos.id != id;
    });
    setTodos(() => updTodos);
  }

  function addTodo(e) {
    e.preventDefault();
    setTodos((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), isdone: false },
    ]);
    setNewTodo("");
  }

  function updateTodoValue(event) {
    // console.log(event);
    setNewTodo(event.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={addTodo} method="get">
          <input
            type="text"
            placeholder="Add a todo"
            value={newTodo}
            onChange={updateTodoValue}
          />
          <br />
          <button onClick={addTodo}>Add</button>
          <br />
          <br />
          <br />
        </form>

        <hr />
        <h1>Task to be done:</h1>
        <ul>
          {todos.map(({ task, id, isdone }) => (
            <li key={id}>
              {isdone ? <strike>{task}</strike> : task}
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(id)}>Delete</button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => markAsDone(id)}>Mark as done</button>
            </li>
          ))}
          <button onClick={markAllDone}>mark all as done</button>
        </ul>
      </div>
    </>
  );
}

export default Todo;
