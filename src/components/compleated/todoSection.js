import React from 'react'
import './TodoSection.css'

function TodoSection({data,className,title,iconClass,Compleated,edit,Cancelled}) {

    return (
        <div className="main">
            <div className={className}>
                <div className="container-header">
                    <h1>{title}</h1>
                </div>
                {data.map((obj)=>{
                        return(<div className="container-content">
                        <div className="container-content-para">
                        <p>{obj.text}</p>
                        </div>
                        <div className="container-content-icon">
                        <i onClick={()=>Cancelled(obj.id)} class="fas fa-times"></i>
                        <i onClick={()=>edit(obj.id)} class="fas fa-edit"></i>
                        <i onClick={()=>Compleated(obj.id)} class={iconClass}></i>
                        </div>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default TodoSection
