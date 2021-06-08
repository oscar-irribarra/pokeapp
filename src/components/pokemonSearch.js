import React from 'react';

export default function PokemonSearch({setPokemonName}){

    const searchPokemon = (value = '') => {
        setPokemonName(value);
    }

    return (
    
        <div className="w-full max-w-xs mx-auto dark:bg-gray-800">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="pokemon" 
                        type="text" 
                        placeholder="Pokemon"
                        onKeyUp={e => searchPokemon(e.target.value) } />
                </div>
            </form>
        </div>
    );

}