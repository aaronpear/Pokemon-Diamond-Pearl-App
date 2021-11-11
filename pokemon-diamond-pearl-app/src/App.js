import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokedex/5/')
      .then(response => {
        // console.log(response.data.pokemon_entries);
        setAllPokemon(response.data.pokemon_entries);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])
  console.log(allPokemon);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick Your Team!</h1>
        {
          allPokemon.map(mon => (
            // console.log(mon)
            <h2>{mon.pokemon_species.name}</h2>
          ))
        }
      </header>
    </div>
  );
}

export default App;
