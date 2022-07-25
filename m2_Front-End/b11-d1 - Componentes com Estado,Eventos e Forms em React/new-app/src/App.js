// arquivo App.js, criado pelo create-react-app, modificado
import React from "react";
import "./App.css";
import Pokemons from "./Pokemon";
import pokemons from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPokemons: pokemons, //lista de todos os pokemons
      index: 0,
      filteredPokemons: pokemons,
      pokemonFilter: "",
    };
  }
  handleClick = () => {
    this.setState((previousValue) => {
      let nextIndex = previousValue.index + 1;
      if (previousValue.filteredPokemons.length - 1 === previousValue.index)
        nextIndex = 0;
      return {
        index: nextIndex,
      };
    });
  };
  filterPokemon = (filter) => {
    this.setState({
      pokemonFilter: filter,
      filteredPokemons: this.state.listOfPokemons.filter((eachPokemon) => {
        if (filter === "") return eachPokemon;
        return eachPokemon.type === filter;
      }),
      index: 0,
    });
  };
  enableButton = () => {
    return this.state.filteredPokemons.length > 1;
  };

  render() {
    const { listOfPokemons, index, filteredPokemons } = this.state;
    return (
      <main>
        <section>
          <button onClick={() => this.filterPokemon("")}>All</button>
          <button onClick={() => this.filterPokemon("Fire")}>Fire</button>
          <button onClick={() => this.filterPokemon("Electric")}>
            Electric
          </button>
          <button onClick={() => this.filterPokemon("Psychic")}>Psychic</button>
          <button onClick={() => this.filterPokemon("Bug")}>Bug</button>
          <button onClick={() => this.filterPokemon("Poison")}>Poison</button>
          <button onClick={() => this.filterPokemon("Normal")}>Normal</button>
          <button onClick={() => this.filterPokemon("Dragon")}>Dragon</button>
        </section>
        <Pokemons
          pokemon={filteredPokemons[index]}
          key={filteredPokemons[index].id}
        />
        <button
          onClick={() => this.handleClick("")}
          disabled={!this.enableButton()}
        >
          Próximo Pokemon
        </button>
      </main>
    );
  }
}

export default App;
