import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  capitalizeName = () => {
    return this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
  }

  // on click, toggle the "front" state (boolean)
  // so we can use this to conditionally render a front or back image
  handleClickCard = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    // console.log(this.props.sprites.front)
    // console.log(this.props.stats[5].value)
    return (
      <Card>
        <div onClick={this.handleClickCard}>
          <div className="image">
            <img src={this.state.front ? this.props.sprites.front : this.props.sprites.back} alt={this.props.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats.find(stat => stat.name === 'hp').value} hp
              {/* {this.props.stats[5].value} hp */}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
