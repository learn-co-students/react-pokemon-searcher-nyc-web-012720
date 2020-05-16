import React from 'react'
import Store from './components/Store'
import PokemonPage from './components/PokemonPage'
import './App.css'

const App = () => (
  <div className="App">
    <Store>
      <PokemonPage />
    </Store>
  </div>
)

export default App
