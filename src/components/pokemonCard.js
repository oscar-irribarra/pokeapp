import React from 'react';
import { Link } from "react-router-dom";


export default function PokemonCard({id, name, image}){
    return (
        <Link to={`/details?name=${name}`} >
            <figure  className="animate__animated animate__fadeIn animate__delay-2 m-3 bg-gray-50 shadow-lg rounded-xl p-4">
                <img className="w-15 h-15 md:w-48 md:h-auto md:rounded-none mx-auto" src={image} alt={name} />
            <p className="text-center capitalize">
            <strong>{ name }</strong>
            </p>
            </figure>
        </Link>
    );

}