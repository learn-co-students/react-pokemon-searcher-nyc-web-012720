import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggled: false
  }

  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleToggle}>
            <img src={this.state.toggled ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(x => x.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
