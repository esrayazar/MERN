import React, { useState, useEffect } from "react";

const Homepage =(props)=>{
const [pokemon, setPokemon]=useState([]);


    useEffect(() => {
        
        fetch( 'https://pokeapi.co/api/v2/pokemon?limit=900&offset=0')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
    }, []);

    return(
        <div style={{border:"solid 1px black",textAlign:"center" }} >
            <button style={{textAlign:"center",margin:"auto"}} >FETCH POKEMON</button>
            <ul style={{textAlign:"center",width:"500px",margin:"auto",border:"solid 1px black",marginTop:"20px"}}> 
                
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li style={{width:"20%",textIndent:"5px",margin:"auto",border:"solid 1px black"}}key={index}><span >{pokemon.name}</span></li> )
            })}
            </ul>


        </div>
    )


}
export default Homepage;