import React, { useEffect, useState } from 'react'
import './App.css'
import LoadBtn from './components/LoadBtn';
import PokemonList from './components/PokemonList';

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=12")
  const [nextPage, setNextPage] = useState("")

  //Get url date all pokemon
  const getPokemon = async () => {
    let response = await fetch(currentUrl);
    let data = await response.json();
    setNextPage(data.next);
    //Function get pokemon info
    const pokemonInfo = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setPokemon(currentList => [...currentList, data])
      })
    }
    pokemonInfo(data.results)
  }

  useEffect(() => {
    getPokemon();
  }, [currentUrl])

  //Function next page loading pokemon
  function nextPageUrl() {
    setCurrentUrl(nextPage)
  }
  return (
    <div className="container">
      <div className="App">
        <h1>POKEMON LIST</h1>
        <div className='pokemon' >
          {pokemon.map((p, key) => {
            return <PokemonList
              key={key}
              {...p}
            />
          })}
        </div>
        <LoadBtn nextPageUrl={nextPageUrl} />
      </div >
    </div>
  );
}
export default App;


