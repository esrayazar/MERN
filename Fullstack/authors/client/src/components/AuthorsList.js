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
                Add an author
                </Link>
                <p className="p-3 mb-2 text-purple fw-bold"> We have quotes by:</p>
            <table className="table table-striped table-bordered border-dark">
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
                        <td className="fw-bold">
                        <p>{author.Author}</p>
                        </td>
                        <td >

                        <Link to={`/author/edit/${author._id}`}>
                        <button className="gradiant m-2 btn-sm text-light fw-bold "
                         >Edit</button>
                        </Link>

                        <button className="gradiant m-2 btn-sm text-white fw-bold"
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
