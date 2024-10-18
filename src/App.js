import React from 'react';
import './App.css'; 
import TodoList from './components/TodoList'; 

function App() {
  return (
    <div className="App">
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;
