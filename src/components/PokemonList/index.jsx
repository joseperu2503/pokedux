import React from 'react'
import PokemonCard from '../PokemonCard'


export default function PokemonList({pokemons}) {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>
        ))}
    </div>
  )
}