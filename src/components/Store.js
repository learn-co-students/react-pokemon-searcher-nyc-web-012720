import React, { useState } from 'react';

export const PokemonsContext = React.createContext([])
export const SearchPContext = React.createContext('')
export const NewPContext = React.createContext({})
export const SortPContext = React.createContext('')
export const FilterTypeContext = React.createContext('')

const Store = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [serachP, setSearchP] = useState('')
    const [newP, setNewP] = useState({})
    const [sortP, setSortP] = useState('')
    const [filterType, setFilterType] = useState('')

    return (
        <div>
            <PokemonsContext.Provider value={[pokemons, setPokemons]} >
            <SearchPContext.Provider value={[serachP, setSearchP]}>
            <NewPContext.Provider value={[newP, setNewP]}>
            <SortPContext.Provider value={[sortP, setSortP]}>
            <FilterTypeContext.Provider value={[filterType, setFilterType]}>
                {children}
            </FilterTypeContext.Provider>
            </SortPContext.Provider>
            </NewPContext.Provider>
            </SearchPContext.Provider>
            </PokemonsContext.Provider>
        </div>
    )
}

export default Store