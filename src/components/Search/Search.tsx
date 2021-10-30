import React, { Component } from 'react'

class Search extends Component{
  render() {
    return  (
      <div className="input-field inline s6">
        <input id="search" type="search" required/>
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    )
  }
} 

export default Search