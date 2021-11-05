import React,{useState, useEffect}from "react";
import { Router, navigate } from "@reach/router";
import CreateProduct from "../components/CreateProduct";
import DisplayAll from "../components/DisplayAll";

import axios from "axios";
const Main= (props) =>{
    const [productList, setProductList] = useState([]);

    return(
        <div>
            <CreateProduct 
            productList={productList} 
            setProductList={setProductList}
            />
            <DisplayAll 
            productList={productList} 
            setProductList={setProductList}
            />
        </div>
    )
}

export default Main