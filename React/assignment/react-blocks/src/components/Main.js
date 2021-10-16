import React from "react";
// import Subcontents from "./Subcontents";
// import Advertisement from "./Advertisement";

const Main = (props)=>{
    return(
        <div style={{ 
            backgroundColor: "#e06666", 
            width: "90%", 
            maxheight: "400px", 
            margin:"30px",
            marginTop:"0px"
            }}>
            {props.children}
        </div>
    )
}

export default Main