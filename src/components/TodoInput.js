import React from 'react';

function TodoInput({ newTodo, setNewTodo, addTodo, handleKeyPress, markAllCompleted, deleteAllTodos }) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button className="button-33" onClick={addTodo}>
        Add Task
      </button>
      <button className="button-33" onClick={markAllCompleted}>
        Mark All
      </button>
      <button className="button-33" onClick={deleteAllTodos}>
        Delete All
      </button>
    </div>
  );
}

export default TodoInput;
