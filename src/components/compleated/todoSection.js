import React from 'react'
import './TodoSection.css'

function TodoSection() {
    return (
        <div>
            <div className="container">
                <div className="container-header">
                    <h1>ToDo</h1>
                </div>
                <div className="container-content">
                    <div className="container-content-para">
                    <p>this is my todo</p>
                    </div>
                    <div className="container-content-icon">
                    <i class="fas fa-times"></i>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-check"></i>
                    </div>    
                </div>
                <div className="container-content">
                    <div className="container-content-para">
                    <p>this is my todo</p>
                    </div>
                    <div className="container-content-icon">
                    <i class="fas fa-times"></i>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-check"></i>
                    </div>    
                </div>
                <div className="container-content">
                    <div className="container-content-para">
                    <p>this is my todo</p>
                    </div>
                    <div className="container-content-icon">
                    <i class="fas fa-times"></i>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-check"></i>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default TodoSection
