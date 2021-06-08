import React from 'react';


export default function PokemonCard({id, name, image}){
    return (
        <figure className="m-3 bg-gray-100 rounded-xl p-4">
            <img className="w-15 h-15 md:w-48 md:h-auto md:rounded-none mx-auto" src={image} alt={name} />
        <p className="text-center capitalize">
        <strong>{ name }</strong>
        </p>
        
        </figure>
    );

}