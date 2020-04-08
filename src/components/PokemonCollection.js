import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
  renderPokemons = (pokemons) => {
    return pokemons.map((pokemon) => {
      return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
    });
  };

  targetPokemon = () => {
    let parentComp = this.props;
    let targetPokemon = parentComp.pokemons.filter((pokemon) => {
      return pokemon.name.includes(parentComp.search);
    });
    if (targetPokemon.length === 1) {
      return this.renderPokemons(targetPokemon);
    } else {
      return this.renderPokemons(parentComp.pokemons);
    }
  };
  render() {
    return <Card.Group itemsPerRow={6}>{this.targetPokemon()}</Card.Group>;
  }
}

export default PokemonCollection;
