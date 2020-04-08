import React from 'react'
import { Form, Radio } from 'semantic-ui-react'

const Search = props => {
  return (
    <div>
      <Form>
        <Form.Field>
          Selected value: <b>{props.searchBy}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Name'
            name='radioGroup'
            value='name'
            checked={props.searchBy === 'name'}
            onChange={props.handleRadioChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Type'
            name='radioGroup'
            value='type'
            checked={props.searchBy === 'type'}
            onChange={props.handleRadioChange}
          />
        </Form.Field>
      </Form>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={props.onChange} value={props.value} placeholder="search by name"/>
          <i className="search icon" />
        </div>
      </div>
    </div>
  )
}

export default Search
