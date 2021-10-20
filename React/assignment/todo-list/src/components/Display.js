
import React,{useState} from "react"

const Display = (props)=>{
const {todoList, setTodoList} =props;

const deleteHandler = (todofrombelow)=>{
    
    const todoListFilter = todoList.filter((todo,index)=>{
        return todo.content !== todofrombelow
    })

    setTodoList(todoListFilter)
}

const checkboxHandler = (i)=>{
    const newList = todoList.map((todo,index)=>{
       if ( index === i ) {
           todo.checked = !todo.checked
       }
       return todo
    })
setTodoList(newList)
}



    return(
        <div>
            <ul >
           {
            todoList?

            todoList.map((todo,index)=>(
                <div key={index}>
                    
                        <li > {todo.content}</li>
                        <input type="checkbox" checked={todo.checked} onChange= {(e)=>checkboxHandler(index)} /> 
                        <button onClick={(e)=>deleteHandler(todo.content)}>DELETE</button>
                </div>
            ))
           
            :null
            }
            

            </ul> 
        </div>
        )
    }
export default Display;