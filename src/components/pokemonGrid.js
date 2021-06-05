import React, { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';

export default function PokemonGrid({pokemonName = '', pokemons = []}) {
    const [filterPokemons, setfilterPokemons] = useState([...pokemons]);
    console.log(pokemonName);
    useEffect(()=>{
        filtered(pokemonName, pokemons);
    }, [pokemonName, pokemons]);

    const filtered = (name, pokemons = []) => {
        if(name.length !== 0){
            setfilterPokemons(pokemons);
        }else{
            const pokemonFIlter = pokemons.filter(pokemon => String(pokemon).includes(String(name)));
            setfilterPokemons(pokemonFIlter);
        }
    }


    return (
        <div className="flex flex-wrap justify-center mt-5">
            {filterPokemons.map(pokemon => ( <PokemonCard key={pokemon.id} {...pokemon} /> ))}
        </div>
    )

}


