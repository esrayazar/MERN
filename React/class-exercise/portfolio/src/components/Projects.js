import React, {useState} from "react";
 const Projects = (props) =>{
     const {title,likesCount, description } = props;
     // Set the initial value to what you want displayed at first!!
     //This will change the value in state , but not in props
    //Returns a stateful value(getter), and a function to update it.(setter)
     const [likes, setLikes ] = useState(likesCount);
     const [hasliked, setHasliked] = useState(false)
    const dislikesClickHandler =(event) =>{
        let newLikes = likes - 1;
        console.log("new like count: " + newLikes);
        //set the new value for likes in memory and notify React
        // that it needs to update / re-render the DOM for thus component only.
        setLikes(newLikes)
        setHasliked(false)
    }
     const likesClickHandler =(event) =>{
         let newLikes = likes + 1;
         console.log("new like count: " + newLikes);
         //set the new value for likes in memory and notify React
         // that it needs to update / re-render the DOM for thus component only.
         setLikes(newLikes)
         setHasliked(true)
     }
     return(
         <div style={{border: "solid 1px black", width:"270px", height:"200px",margin:"15px",padding: "5px", display:"inline-block"}}>
             
             <h3>{title}</h3>
             {/* when the button is clicked, it will execute the function */}
             <button 
             onClick={(event)=>dislikesClickHandler(event)}
             disabled={!hasliked}
             >Dis-Like Project</button>
             <button 
             onClick={(event)=>likesClickHandler(event)}
             disabled={hasliked}
             >Like Project</button>
             <h4>Likes: {likes} </h4>
             <div>Description:</div>
             <div>{description}</div>

         </div>
     )
 }
export default Projects;