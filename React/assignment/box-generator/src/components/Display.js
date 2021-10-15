import React from "react";

const Display = (props)=>{

    const {boxList}= props

    return(
        <div>   

            {
                boxList.map((box, index)=> (

                    <p style={{
                        width: box.width , backgroundColor:box.color , display:"inline-block", margin:"5px", height: box.width
                    }} >
                        

                    </p>

                ))
            }

        </div>
    )
}

export default Display