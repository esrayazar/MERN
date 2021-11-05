import React,{ useEffect, useState }from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const OneProduct =(props)=>{
    const{id} =props;
    const[oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
        console.log(res.data);
        setOneProduct(res.data);

    })
    .catch((err)=>{
        console.log(err);
    })
    },[id])

 const deleteHandler =()=>{
    axios
    .delete(`http://localhost:8000/api/products/${id}`)
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
            <p>{oneProduct.title}</p>
            <p>{oneProduct.price}</p>
            <p>{oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>

        </div>
    )
}

export default OneProduct;