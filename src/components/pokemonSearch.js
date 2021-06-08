import React from 'react';

export default function PokemonSearch({setPokemonName}){

    const searchPokemon = (value = '') => {
        setPokemonName(value);
    }

    return (
    
        <div className="w-full max-w-xs mx-auto">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="pokemon" 
                        type="text" 
                        placeholder="Pokemon"
                        onKeyUp={e => searchPokemon(e.target.value) } />
        </div>
    );

}