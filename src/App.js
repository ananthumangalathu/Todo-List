import React, { useEffect, useState } from 'react';
import './App.css';
import TodoSection from './Components/Compleated/TodoSection';
import TodoList from './Components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [compleated, setCompleated] = useState([])
  const [cancelled, setCancelled] = useState([])
  const [edit, setEdit] = useState([])
  
  
  
  const handleCompleated=(id)=>{
    setTodos(todos.filter(item => item.id !== id));
    setCompleated(todos.filter(item=> item.id===id))
  }

  const handleCancelled=(id)=>{
    setTodos(todos.filter(item => item.id !== id));
    setCancelled(todos.filter(item=> item.id===id))
  }

  const handleCompleatedDelete=(id)=>{
    setCompleated(compleated.filter(item=> item.id!==id))
  }

  const handleCancelleddDelete=(id)=>{
    setCancelled(cancelled.filter(item=> item.id!==id))
  }

  const handleCompleatedBackward=(id)=>{
    setCompleated(compleated.filter(item => item.id !== id));
    setTodos(compleated.filter(item=> item.id===id))
  }

  const handleCacellededBackward=(id)=>{
    setCancelled(cancelled.filter(item => item.id !== id));
    setTodos(cancelled.filter(item=> item.id===id))
  }
  
  const handleEdit=(id)=>{
    setEdit(todos.filter(item=> item.id===id))
    setTodos(todos.filter(item=> item.id!==id))
    console.log(edit)
    const list=edit.map((obj)=>{      
      return (obj.text)
    })
    setTodo(list)
    
    
  }

  

  return (
    <div className="App">
      <TodoList todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} edit={edit} />
      <div className="content">
        
        <TodoSection 
        data={compleated} 
        className="compleated" 
        title="Compleated" 
        iconClass="fas fa-backward" 
        Compleated={handleCompleatedBackward}
        Cancelled={handleCompleatedDelete} />
        
        <TodoSection 
        data={todos} 
        className="container" 
        title="Todo" 
        iconClass="fas fa-check" 
        Compleated={handleCompleated} 
        edit={handleEdit}
        Cancelled={handleCancelled}/>
        
        <TodoSection 
        data={cancelled} 
        className="cancelled" 
        title="Cancelled" 
        iconClass="fas fa-backward" 
        Compleated={handleCacellededBackward} 
        Cancelled={handleCancelleddDelete}/>
      </div>
    </div>
  );
}

export default App;
