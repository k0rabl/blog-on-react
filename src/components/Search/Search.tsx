import React, { Component, ChangeEvent } from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { ISearchProps, ISearchState } from './ISearch'
import { handleFilterString, handleDrop } from './SearchSlice'

class Search extends Component<ISearchProps, ISearchState>{

  constructor(props: ISearchProps){
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { handleFilterString } = this.props

    this.setState({searchValue: e.target.value })
    handleFilterString(e.target.value)
  }

  dropSearch(){
    const { handleDrop } = this.props
    this.setState({searchValue: '' })

    handleDrop()
  }

  render() {    
    const { searchValue } = this.state
    return  (
      <div className="input-field inline s6">
        <input id="search" type="search" onChange={e => this.handleChange(e)} value={searchValue}/>
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons " onClick={() => this.dropSearch()}>close</i>
      </div>
    )
  }
} 


const mapDispatchToProps = { handleFilterString, handleDrop }

export default connect(null, mapDispatchToProps)(Search)
