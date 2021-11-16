import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import { Link } from "@reach/router"

const EditAuthor = (props)=>{

    const [errors, setErrors] = useState({});
    const {id} = props;
    const [author, setAuthor] = useState("")
    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthor(res.data.author);
            
        })
        .catch((err)=>{
            console.log(err);
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
            console.log("edit error: ",err);
            console.log("message: ", err.response.data.errors )
            setErrors(err.response.data.errors);
        })
    }
    return(
        <div className="container d-flex justify-content-center">  
            <div className= "row w-50 d-flex float-left" > 
            <h2 className = "text-start">Favorite authors</h2>
            <Link to={`/`}>
                Home
            </Link>
            <h4 className="p-3 mb-2 text-purple text-start">Edit this author</h4>
            <form onSubmit={submitHandler}>
            {/* {

            author.length<3?
            <span className="text-danger">An author name must be at least 3 characters long</span>
            :null

            } */}
                <div className="border border-dark">
                <label className="m-3">Name:</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="name" type="text" value={author}/> <br/>
                <input  className="btn btn-primary m-2" type= "submit"/>
                <button  className="btn btn-primary m-2" onClick={()=>navigate("/")}>Cancel</button>
                <br/>

                {
                    errors.author ?
                    <span className="text-danger">{errors.author.message}</span>
                    :null
                }
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditAuthor