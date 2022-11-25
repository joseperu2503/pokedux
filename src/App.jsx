import { useEffect } from 'react';
import logo from './statics/logo.svg'
import './App.css'
import PokemonList from './components/PokemonList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Spinner from './components/spinner';
import Searcher from './components/Searcher';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import ToggleDarkmode from './components/ToggleDarkmode';

function App() {

	const pokemons = useSelector(state => state.data.pokemonsFiltered);
    const searchValue = useSelector(state => state.data.searchValue, shallowEqual);
    const loading = useSelector(state => state.ui.loading, shallowEqual);
	const darkmode = useSelector(state => state.data.darkmode, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemonsWithDetails())
	}, []);

	return (
		<div className="bg-slate-100 fixed top-0 right-0 left-0 bottom-0 overflow-y-scroll dark:bg-slate-900 px-3">
			<div className='flex justify-end mt-6 mr-6'>
				<ToggleDarkmode darkmode={darkmode}/>
			</div>
			<div className='max-w-xs mx-auto mt-6 mb-10'>
				<img src={logo} alt="logo" />
			</div>
			
			<div className=' max-w-sm mx-auto'>
				<Searcher searchValue={searchValue}/>
			</div>
			<div className='mt-10 sm:px-4 flex justify-center flex-col max-w-7xl mx-auto'>
                {loading ? 
					<Spinner/>
                :
                	<PokemonList pokemons={pokemons}/>
				}
            </div>
		</div>
	)
}

export default App
