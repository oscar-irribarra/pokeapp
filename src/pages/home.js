import React, { useEffect, useState } from 'react';
import PokemonGrid from '../components/pokemonGrid';
import PokemonSearch from '../components/pokemonSearch';


export default function Home(){

    const [ pokemonName, setPokemonName ] = useState('');
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, []);
    
    const fetchPokemon = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', { headers: { 'Content-Type': 'application/json' } });
        const data = await res.json();
        const pokemons = data.results.map(({name}, index) => {
            return {
                id: index,
                name: name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            }
        });

        setPokemons(pokemons);
    }

    return (
            <div className="dark">
                <PokemonSearch setPokemonName={setPokemonName} />
                <PokemonGrid pokemonName={pokemonName} pokemons={pokemons} /> 
            </div>
    )
}
