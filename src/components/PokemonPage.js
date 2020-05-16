import React, { useContext, useEffect }from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { PokemonsContext, SearchPContext, SortPContext, FilterTypeContext } from './Store'

const PokemonPage = () => {
  const [pokemons, setPokemons] = useContext(PokemonsContext)
  const [searchP] = useContext(SearchPContext)
  const [sortP] = useContext(SortPContext)
  const [filterType] = useContext(FilterTypeContext)

  useEffect(() => { getPokemons() },[])

  const getPokemons = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(list => setPokemons(list))
  }

  const findPokemons = () => {
    const list = [...pokemons]
    console.log(list)
    if (searchP !== '') {
      console.log("inside find", searchP)
      return list.filter(pokemon => pokemon.name.includes(searchP))
    }
    return list
  }

  const sortedList = () => {
    const list = findPokemons()
    if (sortP === "name"){ 
      return [...list].sort((a, b) => a.name.localeCompare(b.name))
    } if( sortP === "hp"){
      return [...list].sort((a,b) => findHp(b) - findHp(a))
    }
    return list
  }

  const findHp = (pokemon) => {
    let hp = pokemon.stats.filter( stats => {
      return stats.name === "hp" && stats.value
    })
    return hp[0].value
  }

  const filteredList = () => {
    const list = sortedList()
    if (filterType !== ''){
      return list.filter( pokemon => pokemon.types.includes(filterType))
    }
    return list
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1><br />
      <PokemonForm/><br />
      <Search /><br />
      <PokemonCollection pokemons={(filteredList())} findHp={findHp}/>
    </Container>
  )
}

export default PokemonPage

// {/* <PokemonCollection pokemons={pokemons} findHp={this.findHp} /> */}

// onSearchChange = event => {
//   this.setState({searchPokemon: event.target.value})
// }

// findPokemons = () => {
//   const list = this.state.pokemons
//   if (this.state.searchPokemon !== "") {
//     return list.filter(pokemon => pokemon.name.includes(this.state.searchPokemon))
//   } else {
//     return list
//   }
// }

// handleSort = event => {
//   this.setState({sortPokemon: event.target.value})
// }

// findHp = (pokemon) => {
//   let hp = pokemon.stats.filter( stats => {
//     return stats.name === "hp" && stats.value
//   })
//   return hp[0].value
// }

// sortedList = () => {
//   let list = this.findPokemons()
//   if (this.state.sortPokemon === "name"){ 
//     return [...list].sort((a, b) => a.name.localeCompare(b.name))
//   } if( this.state.sortPokemon === "hp"){
//     return[...list].sort((a,b) => this.findHp(b) - this.findHp(a))
//   } else {
//     return list
//   }
// }

// handleFilter = event => {
//   this.setState({ filterType: event.target.value })
// }

// filteredList = () => {
//   const sortedList = this.sortedList()
//   if (this.state.filterType !== ""){
//     return sortedList.filter( pokemon => pokemon.types.includes(this.state.filterType))
//   } else {
//     return sortedList
//   }
// }

// {/* <PokemonForm handleNewPokemon={this.handleNewPokemon}/> */}

// handleNewPokemon = newPokemon => {
//   this.setState({ pokemons: [...this.state.pokemons, newPokemon]})
// }
