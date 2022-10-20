import { useEffect } from 'react';
import { getPokemons } from './api';
import logo from './statics/logo.svg'
import './App.css'
import PokemonList from './components/PokemonList';
import { getPokemonsWithDetails, setLoading } from './actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Spinner from './components/spinner';
import Searcher from './components/Searcher';

function App() {

	const pokemons = useSelector(state => state.data.pokemonsFiltered);
	const loading = useSelector(state => state.ui.loading);
	const searchValue = useSelector(state => state.data.searchValue);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			dispatch(setLoading(true))
			const pokemonsRes = await getPokemons()
			dispatch(getPokemonsWithDetails(pokemonsRes))
			dispatch(setLoading(false))
		}
		fetchPokemons()
	}, []);

	return (
		<div className="bg-slate-100 fixed top-0 right-0 left-0 bottom-0 overflow-y-scroll">
			<div className='max-w-xs mx-auto mt-10 mb-10'>
				<img src={logo} alt="" />
			</div>
			
			<div className=' max-w-sm mx-auto'>
				<Searcher searchValue={searchValue}/>
			</div>
			<div className='mt-10 px-10 flex justify-center flex-col'>
                {loading ? 
					<Spinner/>
                :
                <PokemonList pokemons={pokemons}/>}
            </div>
		</div>
	)
}

export default App
