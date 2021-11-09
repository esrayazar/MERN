import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import { Link } from "@reach/router"

const EditAuthor = (props)=>{

    const {errors, setErrors} = props;
    const {author, setAuthor,id} = props;
    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthor(res.data.Author);
            
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        });
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
        <div className="container d-flex justify-content-center">
            <div className= "row w-50 d-flex justify-content-center" > 
            <h1>Favorite authors</h1>
            <Link to={`/`}>
                Home
            </Link>
            <h3 className="p-3 mb-2 text-purple">Edit this author</h3>
            <form onSubmit={submitHandler}>
                <div className="border border-dark">
                <label className="m-3">Name:</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="name" type="text" value={author}/> <br/>
                <input  className="btn btn-primary m-2" type= "submit"/>
                <button  className="btn btn-primary m-2" onClick={()=>navigate("/")}>Cancel</button>
                {
                    errors ?
                    <span className="text-danger">{errors.Author.message}</span>
                    :null
                }
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditAuthor