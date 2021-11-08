import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";

const NewAuthor = (props)=>{
    const {author, setAuthor} = props;

    const submitHandler =(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/authors",
        {
            "Author" : author
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthor([...author, res.data.author]);
            setAuthor("");
            navigate("/")
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={`/`}>
                <p>Home</p>
            </Link>
            <h3>Add a new author:</h3>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="author" type="text" value={author}/>
                <input type= "submit"/>
                <button onClick={()=>navigate("/")}>Cancel</button>
            </form>

        </div>
    )
}

export default NewAuthor