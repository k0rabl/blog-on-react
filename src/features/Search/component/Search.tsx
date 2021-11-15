import React, { Component, ChangeEvent } from 'react'

import { connect } from 'react-redux'
import { ISearchProps, ISearchState } from './ISearch'
import { handleFilterString, handleDrop } from '../../Article/ArticleSlice'

import './Search.sass'

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
      <div className="searchContainer">
        <input type="search" onChange={e => this.handleChange(e)} value={searchValue} placeholder='Search'/>
        <i className={`material-icons close ${!!searchValue ? 'show': ''}`} onClick={() => this.dropSearch()}>close</i>
      </div>
    )
  }
} 


const mapDispatchToProps = { handleFilterString, handleDrop }

export default connect(null, mapDispatchToProps)(Search)
