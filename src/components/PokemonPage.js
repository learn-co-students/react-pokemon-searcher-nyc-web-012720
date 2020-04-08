import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchedPokemon: [],
      pokemonToDelete: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          pokemons: data,
          searchedPokemon: data,
        });
      });
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    let searchedPokemon = this.state.pokemons.filter((p) =>
      p.name.includes(event.target.value)
    );
    this.setState({
      searchedPokemon: searchedPokemon,
    });
  };

  postPokemon = (pokemon) => {
    console.log(pokemon.name);
    // const { name, hp, frontUrl, backUrl } = pokemon;
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pokemon.name,
        stats: [
          {
            value: pokemon.hp,
            name: "hp",
          },
        ],
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((newPokemon) => {
        this.setState({
          pokemons: [...this.state.pokemons, newPokemon],
          searchedPokemon: [...this.state.searchedPokemon, newPokemon],
        });
      });
  };

  handleDelete = (id) => {
    console.log(id);
    const pokemonToDelete = this.state.pokemons;
    pokemonToDelete.find((pokemon) => pokemon.id === id);
    fetch(`http://localhost:3000/pokemon/${id}`, {
      method: "delete",
    }).then(() => {
      fetch("http://localhost:3000/pokemon")
        .then((resp) => resp.json())
        .then((data) => {
          this.setState({
            pokemons: data,
            searchedPokemon: data,
          });
        });
    });
  };

  render() {
    console.log(this.state.searchedPokemon);
    // console.log(this.state.pokemonToDelete);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={this.postPokemon} />
        <br />
        <Search onChange={this.handleSearch} />
        {/* <Search onChange={() => console.log("🤔")} /> */}
        <br />
        <PokemonCollection
          pokemons={this.state.searchedPokemon}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export default PokemonPage;
