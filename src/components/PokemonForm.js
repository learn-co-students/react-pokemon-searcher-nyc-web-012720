import React, {useState, useContext} from 'react'
import { Form } from 'semantic-ui-react'
import { PokemonsContext } from './Store'

const PokemonForm = () => {
  const [pokemons, setPokemons] = useContext(PokemonsContext)
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const stats = [{},{},{},{},{},{"value": parseInt((hp),0), "name": "hp"}]
    const sprites = {"front": frontUrl, "back": backUrl}

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats,
        sprites
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      setPokemons([...pokemons, newPokemon]),
      setName(''),
      setHp(''),
      setFrontUrl(''),
      setBackUrl('')
    })
  }
    return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e => setName(e.target.value)} 
          />
          <Form.Input fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={e => setHp(e.target.value)} 
          />
          <Form.Input fluid 
            label="Front Image URL" 
            placeholder="url" 
            name="frontUrl" 
            value={frontUrl}
            onChange={e => setFrontUrl(e.target.value)} 
          />
          <Form.Input fluid 
            label="Back Image URL" 
            placeholder="url" 
            name="backUrl" 
            value={backUrl}
            onChange={e => setBackUrl(e.target.value)} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm

// constructor() {
//   super()

//   this.state = {
//     name: '',
//     hp: '',
//     frontUrl: '',
//     backUrl: ''
//   }
// }

// handleChange = event => {
//   const key = event.target.name
//   const value = event.target.value
//   this.setState({[key] : value})
// }