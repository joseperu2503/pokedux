import { SET_FAVORITE, SET_POKEMONS, SET_POKEMONSFILTERED, SET_SEARCHVALUE } from "../actions/types";

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    searchValue: ''
};

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}
        case SET_POKEMONSFILTERED:
            return {...state, pokemonsFiltered: action.payload}
        case SET_SEARCHVALUE:
            console.log(state.pokemons)
            const newPokemonsFiltered = [...state.pokemons].filter(pokemon => {
                const pokemonName = pokemon.name.toLowerCase()
                const searchValue = action.payload.toLocaleLowerCase()
                return pokemonName.includes(searchValue)
            })
            console.log(newPokemonsFiltered)
            return {...state, searchValue: action.payload, pokemonsFiltered: newPokemonsFiltered}
        case SET_FAVORITE:
                const newPokemonsList = [...state.pokemons]
                const currentPokemonIndex = newPokemonsList.findIndex(pokemon => pokemon.id == action.payload)
                if(currentPokemonIndex < 0){
                    return state
                }
                newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite
                return {...state, pokemons: newPokemonsList, pokemonsFiltered: newPokemonsList}
        default:
            return state
    }
}