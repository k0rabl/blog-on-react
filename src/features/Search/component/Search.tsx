import React, { PureComponent, ChangeEvent } from 'react'

import { connect } from 'react-redux'
import { ISearchProps, ISearchState } from './ISearch'
import { setActive } from '../../Pagination/PaginationSlice'
import { handleFilterString, handleDrop } from '../../Article/ArticleSlice'

import './Search.sass'

class Search extends PureComponent<ISearchProps, ISearchState>{

  constructor(props: ISearchProps){
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { handleFilterString, setActive } = this.props  

    this.setState({searchValue: e.target.value })
    setActive(1)
    handleFilterString(e.target.value)
  }

  dropSearch = () => {
    const { handleDrop } = this.props
    this.setState({searchValue: '' })

    handleDrop()
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


const mapDispatchToProps = { handleFilterString, handleDrop, setActive }

export default connect(null, mapDispatchToProps)(Search)
