// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokemons from './Pokemon';
import pokemons from './data/data';





class App extends React.Component {
  render() {

    return (
      <main>
        {pokemons.map((eachPokemon) => <Pokemons pokemon={eachPokemon} key={eachPokemon.id}/>)}
      </main>
      )
  }
}

export default App;