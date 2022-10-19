import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { pokemonsReducer } from './reducers/pokemons'
import thunk from 'redux-thunk'
import { logger } from './middleware'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhacers = composeAlt(applyMiddleware(thunk, logger))
const store = createStore(pokemonsReducer, composeEnhacers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
