import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={e => props.onChange(e.target.value)} value={props.searchPoke} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
