import React from "react";
const DataComponent = (props)=>{
    return(
        <div>
            {
                isNaN(props.word)?
                <p 
                style={
                    props.color?
                    {color:props.color,backgroundColor:props.backgcolor}
                    :null
                }

                >The word is:{props.word}</p>
                :<p>The number is:{props.word}</p>
            }
            
        </div>

    )
}

export default DataComponent;