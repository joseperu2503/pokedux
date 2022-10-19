import React from 'react'
import StarButton from './StarButton'
import Type from './Type'

const PokemonCard = ({pokemon}) => {

    const handeOnFavorite = () => {

    }

    return (
        <div className='w-full shadow-md bg-white rounded-md p-4'>
            <div className='flex justify-between items-center'>
                <span className='text-lg font-bold text-slate-600'>{pokemon.name}</span>
                <StarButton isFavorite={pokemon.favorite} onClick={handeOnFavorite}/>
                
            </div>
            
            <div className='flex justify-between'>
                <div className='flex flex-col mt-4 gap-2'>
                    {pokemon.types?.map(type => (
                        <Type key={type.type.name}>{type.type.name}</Type>
                    ))}
                </div>
                <img 
                    src={pokemon.sprites?.other['official-artwork'].front_default} 
                    alt={pokemon.name}
                    className='w-36'
                />
            </div>
        </div>
    )
}

export default PokemonCard