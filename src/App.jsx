import { useEffect } from 'react';
import { getPokemons } from './api';
import logo from './statics/logo.svg'
import './App.css'
import PokemonList from './components/PokemonList';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';

function App({pokemons, setPokemons}) {

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons()
			setPokemons(pokemonsRes)
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

const mapStateToProps = (state) => ({
	pokemons: state.pokemons
})

const mapDispatchToProps = (dispatch) => ({
	setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
