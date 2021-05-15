import React from 'react';
import './App.css';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  useEffect(getPokemon, [])
  const dispatch = useDispatch()
  
  function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(({ results }) => dispatch({ type: "SET_POKEMON", pokemon: results }))
  }
  
  const pokemon = useSelector(state => state.pokemon)

  function showPokemon(){
    return pokemon.map(pokemon => 
      <div>
        <h2>Pokemon Name: {pokemon.name}</h2>
      </div>)
  }

  return (
    <div className="App">
      <h1>Pokemon Redux</h1>
      {showPokemon()}
    </div>
  );
}

export default App;
