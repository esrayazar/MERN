import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import { Link } from "@reach/router"

const EditAuthor = (props)=>{

    const {author, setAuthor,id} = props;
    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthor(res.data.Author);
            
        })
        .catch((err)=>console.log(err));
    },[id]);
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`,
        {
            author
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
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
            <h3>Edit this author</h3>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="name" type="text" value={author}/>
                <input type= "submit"/>
                <button onClick={()=>navigate("/")}>Cancel</button>

            </form>
        </div>
    )
}

export default EditAuthor