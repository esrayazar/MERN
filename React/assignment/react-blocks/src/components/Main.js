import React from "react";
// import Subcontents from "./Subcontents";
// import Advertisement from "./Advertisement";

const Main = (props)=>{
    return(
        <div style={{ backgroundColor: "#e06666", width: "700px", height: "400px", margin:"30px", marginTop:"40px", alignItems:"center"}}>
            {props.children}
        </div>
    )
}

export default Main