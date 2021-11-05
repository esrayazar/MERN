import React,{ useState, useEffect}from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAll =(props)=>{
    const{productList, setProductList} = props;
    

    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=> console.log(err));


    }, []);

    const deleteFilter = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
        .then((res)=>{
            console.log(res.data);
            const newList = productList.filter((product, index)=> product._id !==idFromBelow);
            setProductList(newList)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div>
            {productList
            ? productList.map((product, index)=>(
                <div key= {index}>
                    <Link to={`/product/${product._id}`}>
                        <p>{product.title}</p>
                    </Link>
                    <Link to={`/product/edit/${product._id}`}>
                        <span>Edit</span>
                    </Link>
                    <button onClick={()=> deleteFilter(product._id)}>
                        Delete
                    </button>
                </div>
            ))
            :null }

        </div>
    );
}

export default DisplayAll;