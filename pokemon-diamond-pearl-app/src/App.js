import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import TeamForm from './components/TeamForm';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Here we only want to get the names of the Pokemon in the region we want (Sinnoh)
    // With the name passed through the TeamForm -> TeamMember components, we will make
    // another call to the API within TeamMember for Pokemon specific data
    axios.get('https://pokeapi.co/api/v2/pokedex/5/')
      .then(response => {
        // console.log(response.data.pokemon_entries);
        setAllPokemon(response.data.pokemon_entries);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick Your Team!</h1>
        <TeamForm props={allPokemon} />
        {/* {
          allPokemon.map(mon => (
            console.log(mon)
            <h2>{mon.pokemon_species.name}</h2>
          ))
        } */}
      </header>
    </div>
  );
}

export default App;
