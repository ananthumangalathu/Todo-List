import React from 'react';
import './App.css';
import TodoSection from './Components/Compleated/TodoSection';
import TodoList from './Components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <TodoList/>
      <TodoSection/>
    </div>
  );
}

export default App;
