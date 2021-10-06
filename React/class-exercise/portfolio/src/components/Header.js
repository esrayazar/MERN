import React from 'react';
const Header = (props) =>{
    return(
        <div>
            <h1>Welcome to My Portfolio</h1>
            {/* put navgation bar hear */}
            <button style={{backgroundColor: "lightblue"}}>Home</button>
            <button>Project</button>
            <button>About Me</button>
            <button>Contact Me</button>
        </div>
    )
}




export default Header;