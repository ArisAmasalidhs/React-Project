import React, { useState } from "react";
import TodoItem from "./TodoItem";
import DateTime from "./DateTime";
import TodoInput from "./TodoInput";
import TodoEditForm from "./TodoEditForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editValue;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  const deleteAllTodos = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTodos([]);
    }
  };

  const markAllCompleted = () => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !allCompleted,
    }));
    setTodos(updatedTodos);
    setAllCompleted(!allCompleted);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        handleKeyPress={handleKeyPress}
        markAllCompleted={markAllCompleted}
        deleteAllTodos={deleteAllTodos}
      />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <TodoEditForm
                editValue={editValue}
                setEditValue={setEditValue}
                saveEdit={() => saveEdit(index)}
              />
            ) : (
              <TodoItem
                todo={todo}
                removeTodo={() => removeTodo(index)}
                toggleComplete={() => toggleComplete(index)}
                startEdit={() => startEdit(index)}
              />
            )}
          </li>
        ))}
      </ul>
      <DateTime />
    </div>
  );
}

export default TodoList;
