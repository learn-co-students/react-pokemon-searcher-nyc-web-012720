import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.onChange} />
        <i className="search icon" />
      </div>
      <br/>

      <strong>Sort by: </strong>
    <label>
      <input type="radio" name="sort" value="alphabetically" checked={props.sort === "alphabetically"} onChange={props.handleSortChange}/>
      Name
    </label>
    <label>
      <input type="radio" name="sort" value="hp" checked={props.sort === "hp"} onChange={props.handleSortChange}/>
      HP
    </label>
    <br/>

    <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilterChange} value={props.filter} >
          <option value="None">None</option>
          <option value="Height">Height</option>
          <option value="Weight">Weight</option>
        </select>
      </label>

    </div>
  )
}

export default Search
 