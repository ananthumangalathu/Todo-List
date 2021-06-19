import React from 'react'
import "./TodoList.css"

function TodoList({todo,setTodo,todos,setTodos,edit}) {

    
    const handleOnchange=(event)=>{
        setTodo(event.target.value)
    } 
    
    const handleOnclick=(e)=>{   
        e.preventDefault()   
        setTodos([...todos,{id:Date.now(),text:todo}])
        setTodo("")       
    }
    
    return (
        <div className="todo-container">
            <div className="todo-header">
                <h1>Todo List</h1>
            </div>
            <div className="todo-form">
                <div className="todo-form-textfield">
                    <input className="textfield" 
                    onChange={handleOnchange} 
                    type="text" 
                    placeholder="Enter Todos . . ." 
                    name="" 
                    id="" 
                    value={todo} />
                </div>
                <div className="todo-form-button">
                    <input className="button" 
                    onClick={handleOnclick} 
                    type="button" 
                    value={edit ? "add" : "Add" }/>
                </div>
            </div>
        </div>
    )
}

export default TodoList 
