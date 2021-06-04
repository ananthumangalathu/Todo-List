import React from 'react'
import "./TodoList.css"

function TodoList() {
    return (
        <div className="todo-container">
            <div className="todo-header">
                <h1>Todo List</h1>
            </div>
            <div className="todo-form">
                <div className="todo-form-textfield">
                    <input className="textfield" type="text" placeholder="Enter Todos . . ." name="" id="" />
                </div>
                <div className="todo-form-button">
                    <input className="button" type="button" value="Add" />
                </div>
            </div>
        </div>
    )
}

export default TodoList 
