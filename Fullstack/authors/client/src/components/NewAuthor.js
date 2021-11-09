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
        <div className="container d-flex justify-content-center">
            <div className= "row w-25 d-flex justify-content-center" > 
            <h1>Favorite authors</h1>
            <Link to={`/`}>
                Home
            </Link>
            <h3 className="p-3 mb-2 text-purple">Add a new author:</h3>
            <form onSubmit={submitHandler}>
                <div className="border border-dark  ">
                <label className="m-3">Name</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="author" type="text" value={author}/> <br/>
                <input className="btn btn-primary m-2" type= "submit"/>
                </div>
            </form>
            <button className="btn btn-primary m-2" onClick={()=>navigate("/")}>Cancel</button>
            </div>

        </div>
    )
}

export default NewAuthor