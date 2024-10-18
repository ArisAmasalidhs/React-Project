import React from 'react';

function TodoItem({ todo, removeTodo, toggleComplete, startEdit }) {
  return (
    <div>
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={toggleComplete}
      >
        {todo.text}
      </span>
      <button className="button-37" onClick={startEdit}>
        Edit
      </button>
      <button className="button-37" onClick={removeTodo}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;

