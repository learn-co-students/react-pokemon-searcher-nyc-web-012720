import React from 'react'

const Search = props => {
  return (
    <div className="ui search">

      <div className="ui icon input">
        <input className="prompt" onChange={props.onSearchChange} />
        <i className="search icon" />
      </div>
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="name" checked={props.sortPokemon === "name"} onChange={props.handleSort}/>
          Name
        </label>
        <label>
          <input type="radio" value="hp" checked={props.sortPokemon === "hp"} onChange={props.handleSort}/>
          HP
        </label>
        <br/>

        <label>
          <strong>Filter Type: </strong>
          <select value={props.filter} onChange={props.handleFilter}>
            <option value="">None</option>
            <option value="bug">bug</option>
            <option value="fire">fire</option>
            <option value="flying">flying</option>
            <option value="water">water</option>
          </select>
        </label>
      </div>

    </div>
  )
}

export default Search
