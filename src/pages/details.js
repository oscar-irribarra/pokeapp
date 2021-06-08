import React, { useEffect, useState } from 'react';

import { useLocation, Link } from "react-router-dom";

export default function Details(){

    let query = useQuery();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetchData();
    },[])


    const fetchData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.get('name')}`);
        const data = await res.json();

        const pokemon = {
            id: data.id,
            name: data.name,
            abilities: data.abilities.map( ({ability}) => ability.name ),
            height: data.height,
            weight: data.weight,
            photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
        };

        setPokemon(pokemon);
    }
    
    return (

        <div className="m-8 p-10 rounded-xl bg-gray-100" >
            <div className="grid md:grid-cols-2 sm:grid-cols-1 animate__animated animate__backInDown animate__delay-3">
                <div className="mx-auto" >
                    <img className=" w-48 h-48" src={pokemon?.photo} alt={pokemon?.name} />
                </div>
                <div className="capitalize md:text-left text-center">
                    <p><strong>Name:</strong> {pokemon?.name}</p>
                    <p><strong>height:</strong> {pokemon?.height}</p>
                    <p><strong>weight:</strong> {pokemon?.weight}</p>
                    <p><strong>Abilities:</strong> </p>
                    <ul>
                        { pokemon?.abilities?.map( (ability, index) => <li key={index} >{ ability }</li> ) }
                    </ul>
                </div>
                <Link className="text-lg text-center w-24 rounded-lg bg-red-600 mt-10 md:mt-0 mx-auto md:mx-0" to="/">&lt;</Link>
            </div>
        </div>
    );
    
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }