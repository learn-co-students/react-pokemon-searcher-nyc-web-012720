import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats: [{
        name: 'hp',
        value: ''
      }],
      sprites: 
        {
          front: "",
          back: ""
        },
    }
  }

  handleChange = (event) => {
    if (event.target.name === "front") {
      this.setState({
        sprites: {...this.state.sprites, front: event.target.value }
      })
    } else if (event.target.name === "back") {
      this.setState({
        sprites: {...this.state.sprites, back: event.target.value }
      })
    } else if (event.target.name === "hp") {
      this.setState({
        stats: [{...this.state.stats[0], value: event.target.value }]
      })
    }else {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(poke) => this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.stats[0].value} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.sprites.front} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.sprites.back} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
