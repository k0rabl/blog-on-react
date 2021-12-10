import React, { PureComponent, ChangeEvent } from 'react'

import { IProps, ISearchState } from './ISearch'

import './Search.sass'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActive } from '../../Pagination/PaginationSlice'

class Search extends PureComponent<IProps, ISearchState>{

  constructor(props: IProps){
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {   
    const { setActive } = this.props
    this.setState({searchValue: e.target.value })
    this.props.history.push(`/search?string=${e.target.value}`)
     
    if(!e.target.value)
      this.props.history.push('/')
      
    setActive(1)
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

export default withRouter(connect(
  null,
  { setActive },
)(Search));