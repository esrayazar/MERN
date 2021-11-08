import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AuthorsList = (props)=>{

    const [authorsList, setAuthorsList] = useState([]);

    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/authors")
        .then((res)=>{
            console.log(res.data);
            setAuthorsList(res.data);
        })
        .catch((err)=> console.log(err));


    }, []);

    const deleteFilter = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
        .then((res)=>{
            console.log(res.data);
            const newList = authorsList.filter((author, index)=> author._id !==idFromBelow);
            setAuthorsList(newList)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={`/author/new`}>
                <p>Add an author</p>
                </Link>
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>
                <tbody>
                {authorsList
                ? authorsList.map((author, index)=>(
                    <tr key= {index}>
                        <td>
                        <p>{author.Author}</p>
                        </td>
                        <td >

                        <Link to={`/author/edit/${author._id}`}>
                        <button
                             style={{
                                width:"10%",
                                border:"1px black solid",
                                padding:"5px",
                                margin: "10px",
                                backgroundColor:"greenyellow"
                            }}
                        >Edit</button>
                        </Link>

                        <button  style={{
                                width:"10%",
                                border:"1px black solid",
                                padding:"5px",
                                margin: "10px",
                            }}
                            onClick={()=> deleteFilter(author._id)}>
                            Delete
                        </button>
                        </td>
                    </tr>
                        ))
                :null }
                </tbody>
                </table>            

        </div>
    )
}

export default AuthorsList;
