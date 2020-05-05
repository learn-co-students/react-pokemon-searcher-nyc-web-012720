import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true
  }

  toggleImage = () => {
    this.setState({
      showFront: !this.state.showFront
    })
  }


  render() {
    const pokemon = this.props.pokemon

    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            <img alt={pokemon.name} src={this.state.showFront ? pokemon.sprites.front : pokemon.sprites.back}/>
          </div>
          <div className="content">
          <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
