import React, { useState } from "react";

const Forms = (props)=>{
const [color, setColor] = useState("")
const [width, setWidth] = useState(0+"px")
const {boxList, setBoxList} = props

const submitHandler= (e)=>{ 
    e.preventDefault()
   

    setBoxList([...boxList, {

        color: color,
        width: width
    }])

    console.log(boxList)





}

    return(
        <div>
            <form onSubmit = {submitHandler}>

                <label>Color</label>
                <input onChange= {(e)=> setColor(e.target.value )} type="text" />


                <label>Width</label>
                <input onChange= {(e)=> setWidth(e.target.value + "px")}type="number" />



                <button>SUBMIT</button>

            </form>
            

        </div>
    )
}

export default Forms;