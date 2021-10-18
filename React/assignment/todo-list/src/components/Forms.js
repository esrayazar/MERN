
import React,{useState} from "react"



const Forms = (props)=>{

    const [todo, setTodo]=useState("")
    const {todoList, setTodoList} = props;
    const submitHandler =(e)=>{
        e.preventDefault()

    setTodoList([...todoList,
        {
            "content":todo,
            "checked":false
            
        }
        ])

    setTodo("")
}

    return(
        <div>
            <form onSubmit={submitHandler}>
                <h1>TODO LIST</h1>
                <label htmlFor="todo"> </label>
                <input style={{
                    height:"60px",
                    width:"600px",
                    backgroundColor:"#dddddd",
                    textDecorationColor:"black",
                    textDecorationThickness:"bold"
            
            }}
            name="todo" type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}  />
                <div>
                    <button  style={{ 
                    backgroundColor:"blue" , 
                    height:"50px", 
                    width:"250px", 
                    margin:"10px",
                    fontSize:"larger",
                    
                }}>ADD</button>
                </div>
                

                </form>

        </div>
    )
}

export default Forms;