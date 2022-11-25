import React from 'react'

export default function Image({pokemon}) {
  return (
    <img 
        src={pokemon.sprites?.other['official-artwork'].front_default} 
        alt={pokemon.name}
        className='w-[40%] md:w-[50%]'
    />
  )
}
