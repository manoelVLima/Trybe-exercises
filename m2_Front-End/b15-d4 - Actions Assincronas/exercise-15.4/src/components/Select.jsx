import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../APIs/axios';
import Posts from './Posts';

class Select extends Component {

  handleChange = async ({ target: { value } }) => {
    const response = await axios.get(`r/${value}.json`)
    console.log(response.data.data.children[0].data.title);
  }

  render() {
    return (
      <>
        <div>
        <select onChange={this.handleChange} >
          <option value='' selected disabled>
            Select an option
          </option>
          <option value="reactjs">
            reactjs
          </option>
          <option value="frontend">
            frontend
          </option>
        </select>
      </div>
      <section>
        <Posts /> 
      </section>
      </>
    )
  }
}
export default connect()(Select);