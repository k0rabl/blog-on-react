import React, { PureComponent, ChangeEvent } from 'react'

import { ISearchState } from './ISearch'

import './Search.sass'
import { RouteComponentProps, withRouter } from 'react-router-dom'

class Search extends PureComponent<RouteComponentProps, ISearchState>{

  constructor(props: RouteComponentProps){
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
    this.props.history.push(`/search?string=${e.target.value}`)

    this.setState({searchValue: e.target.value })
  }

  componentDidMount = () => {
    const searchStr = this.props.history.location.search.split('=')
    
    if(searchStr?.[0] === '?string')
      this.setState({searchValue: searchStr[1]})
  }

  dropSearch = () => {
    this.setState({searchValue: '' })
    this.props.history.push('/')
  }


  render() {    
    const { searchValue } = this.state
    return  (
      <div className="searchContainer">
        <input type="search" onChange={this.handleChange} value={searchValue} placeholder='Search'/>
        <i className={`material-icons close ${!!searchValue ? 'show': ''}`} onClick={this.dropSearch}>close</i>
      </div>
    )
  }
} 

export default withRouter(Search)
