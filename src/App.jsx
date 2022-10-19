import { useEffect } from 'react';
import { getPokemons } from './api';
import logo from './statics/logo.svg'
import './App.css'
import PokemonList from './components/PokemonList';
import { getPokemonsWithDetails } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

	const pokemons = useSelector(state => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons()
			dispatch(getPokemonsWithDetails(pokemonsRes))
		}
		fetchPokemons()
	}, []);

	return (
		<div className="bg-slate-100 fixed top-0 right-0 left-0 bottom-0 overflow-y-scroll">
			<div className='max-w-xs mx-auto mt-10 mb-10'>
				<img src={logo} alt="" />
			</div>
			
			<div className=' max-w-sm mx-auto'>
				
			</div>
			<PokemonList pokemons={pokemons}/>
		</div>
	)
}

export default App
