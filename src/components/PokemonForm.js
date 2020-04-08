import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = this.getInitialState()
  }

  getInitialState = () => ({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/pokemon', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name, 
        stats: [
          {
            value: this.state.hp, 
            name: "hp"
          }
        ], 
        sprites: {
          front: this.state.frontUrl, 
          back: this.state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    .catch(error => console.error(error))
    
    this.setState(this.getInitialState())
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleChange}
              fluid label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              onChange={this.handleChange}
              fluid label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              onChange={this.handleChange}
              fluid label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              onChange={this.handleChange}
              fluid label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
