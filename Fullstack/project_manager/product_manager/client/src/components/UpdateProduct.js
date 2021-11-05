import React,{useState, useEffect }from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const UpdateProduct =(props)=>{
    const {id} = props;
    const[title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price)
            setDescription(res.data.description);
        })
        .catch((err)=>console.log(err));
    },[]);
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,
        {
            title,
            price,
            description
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
                <form onSubmit={submitHandler}>
                <label>Title</label>
                <input onChange={(e)=>setTitle(e.target.value)} name="title" type="text" value={title}/>
                <br />
                <label>Price</label>
                <input onChange={(e)=>setPrice(e.target.value)} name="price" type="number" value={price} />
                <br/>
                <label>Description</label>
                <input onChange={(e)=>setDescription(e.target.value)} name="description" type="text" value={description}/>
                <br/>
                <input type= "submit"/>

            </form>

        </div>
    )
}

export default UpdateProduct;