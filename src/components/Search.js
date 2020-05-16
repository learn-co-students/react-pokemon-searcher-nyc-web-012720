import React, {useContext} from 'react'
import { SearchPContext, SortPContext, FilterTypeContext } from './Store'

const Search = () => {
  const [, setSearchP] = useContext(SearchPContext)
  const [sortP, setSortP] = useContext(SortPContext)
  const [filterType, setFilterType] = useContext(FilterTypeContext)

  return (
    <div className="ui search">

      <div className="ui icon input">
        <input className="prompt" onChange={e => setSearchP(e.target.value)} />
        <i className="search icon" />
      </div>
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="name" checked={sortP === "name"} onChange={e => setSortP(e.target.value)}/>
          Name
        </label>
        <label>
          <input type="radio" value="hp" checked={sortP === "hp"} onChange={e => setSortP(e.target.value)}/>
          HP
        </label>
        <br/>

        <label>
          <strong>Filter Type: </strong>
          <select value={filterType} onChange={e => setFilterType(e.target.value)}>
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
