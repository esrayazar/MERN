import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";

const NewAuthor = (props)=>{

    const [errors, setErrors] = useState({});
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
            setErrors(err.response.data.errors);
        })
    }
    return(
        <div className="container d-flex justify-content-center">
            <div className= "row w-50 d-flex justify-content-center" > 
            <h1>Favorite authors</h1>
            <Link to={`/`}>
                Home
            </Link>
            <h3 className="p-3 mb-2 text-purple">Add a new author:</h3>
            <form onSubmit={submitHandler}>
                <div className="border border-dark ">
                <label className="m-3">Name</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="author" type="text" value={author}/> <br/>
                <input className="btn btn-primary m-2" type= "submit"/> 
                <a className="btn btn-primary m-2" onClick={()=>{setAuthor("");navigate("/")}}>Cancel</a>
                <br/>

                {
                    errors.Author ?
                    <span className="text-danger">{errors.Author.message}</span>
                    :null
                }
                </div>
            </form>
            </div>

        </div>
    )
}

export default NewAuthor