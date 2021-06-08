import React, { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';

export default function PokemonGrid({pokemonName: name = '', pokemons = []}) {
    console.log(name)
    
    const [filterPokemons, setfilterPokemons] = useState([...pokemons]);

    useEffect(()=>{
        filtered(name, [...pokemons]);
    }, [name, pokemons]);

    const filtered = (name, pokemons = []) => {
        if(name.length > 0){
            const pokemonFIlter = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
            setfilterPokemons(pokemonFIlter);
        }else{
            setfilterPokemons(pokemons);
        }
    }

    return (
        <div className="flex flex-wrap justify-center mt-5">
            {filterPokemons.map(pokemon => ( <PokemonCard key={pokemon.id} {...pokemon} /> ))}
        </div>
    )

}


