import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    toggle: true,
  };
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { name, stats, sprites } = this.props.pokemon;
    let stat = stats.filter((target) => target.name === 'hp')[0];

    return (
      <Card>
        <div>
          <div className='image' onClick={this.handleClick}>
            <img
              alt={name}
              src={this.state.toggle ? sprites.front : sprites.back}
            />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {stat.value}hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
