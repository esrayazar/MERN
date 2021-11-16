import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";

const NewAuthor = (props)=>{

    const [errors, setErrors] = useState({});
    const [author, setAuthor] = useState("")

    const submitHandler =(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors",
        {
             author
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
            setErrors(err.response.data.errors);
        })
    }
    return(
        <div className="container d-flex justify-content-center">
            <div className= "row w-50 d-flex justify-content-center" > 
            <h2>Favorite authors</h2>
            <Link to={`/`}>
                Home
            </Link>
            <h4 className="p-3 mb-2 text-purple">Add a new author:</h4>
            <form onSubmit={submitHandler}>

            {/* {
                author.length>0&& author.length<3?
                <span className="text-danger">An author name must be at least 3 characters long</span>
                :null
            } */}

                <div className="border border-dark ">
                <label className="m-3">Name</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="author" type="text" value={author}/> <br/>

                <input className="btn btn-primary m-2" type= "submit"/> 
                <a className="btn btn-primary m-2" onClick={()=>{setAuthor("");navigate("/")}}>Cancel</a>
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

export default NewAuthor