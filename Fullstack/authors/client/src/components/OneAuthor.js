import React,{ useEffect, useState }from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const OneAuthor =(props)=>{
    const{id} =props;
    const[author, setAuthor] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
    .then((res)=>{
        console.log(res.data);
        setAuthor(res.data);

    })
    .catch((err)=>{
        console.log(err);
    })
    },[id])
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

 const deleteHandler =()=>{
    axios
    .delete(`http://localhost:8000/api/authors/${id}`)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate("/")
    })
    .catch((err)=>{
        console.log(err);
    });
};
   
    
    return(

        <div>
            <h1>Favorite authors</h1>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input onChange={(e)=>setAuthor(e.target.value)} name="Author" type="text" value={author}/>
                <input type= "submit"/>
                <button onClick={deleteHandler}>Cancel</button>

            </form>
            

        </div>
    )
}

export default OneAuthor;