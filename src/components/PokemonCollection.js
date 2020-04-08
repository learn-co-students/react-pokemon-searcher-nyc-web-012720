import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPokemons = () => {
    let pokemonsToRender = this.props.pokemons;
    return pokemonsToRender.map((pokemon) => {
      return (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
          handleDelete={this.props.handleDelete}
        />
      );
    });
  };

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Pokemon Collection</h1>
        {this.renderPokemons()}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
