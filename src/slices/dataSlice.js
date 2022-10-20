import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    searchValue: ''
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemons()
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setPokemonsFiltered(pokemonsDetailed))
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setPokemonsFiltered: (state, action) => {
            state.pokemonsFiltered = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload            
            state.pokemonsFiltered = state.pokemons.filter(pokemon => {
                const pokemonName = pokemon.name.toLowerCase()
                const searchValue = state.searchValue.toLocaleLowerCase()
                return pokemonName.includes(searchValue)
            })
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload
            })
            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
                state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite
            }
            
        }
    }
})

export const { setFavorite, setPokemons, setPokemonsFiltered, setSearchValue } = dataSlice.actions

export default dataSlice.reducer