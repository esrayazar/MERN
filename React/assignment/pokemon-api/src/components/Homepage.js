import React, { useState, useEffect } from "react";

const Homepage =(props)=>{
const [pokemon, setPokemon]=useState([]);


    useEffect(() => {
        
        fetch( 'https://pokeapi.co/api/v2/pokemon?limit=900&offset=0')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
    }, []);

    return(
        <div style={{alignItems:"center"}} >
            <button >FETCH POKEMON</button>
            <ul style={{textAlign:"center",listStyle:"inside"}}> 
                
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li style={{textIndent:"5px"}}key={index}><span >{pokemon.name}</span></li> )
            })}
            </ul>


        </div>
    )


}
export default Homepage;