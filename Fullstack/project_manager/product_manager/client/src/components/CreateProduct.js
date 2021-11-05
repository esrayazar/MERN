import React,{ useState }from "react";
import axios from "axios";

const CreateProduct =(props)=>{
    const {productList, setProductList} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler =(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductList([...productList, res.data.product])
            setTitle("");
            setPrice("");
            setDescription("");
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
                <input onChange={(e)=>setPrice(e.target.value)} name="price" type="number" />
                <br/>
                <label>Description</label>
                <input onChange={(e)=>setDescription(e.target.value)} name="description" type="text" value={description}/>
                <br/>
                <input type= "submit"/>

            </form>
        </div>
    )
}

export default CreateProduct;

