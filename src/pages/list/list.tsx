import React, { Component } from 'react'
import Articles from '../../fixtures/Articles'
import Article from '../../components/article/Article'
import Pagination from '../../components/pagination/Pagination'
class List extends Component{
  render() {
    return (
      <>
        {Articles.map((element, index) => index < 5 ? <Article key={index} {...element}/> : '')}
        { 
          Articles.length > 5 && 
          <Pagination amount={Articles.length % 5 + 1} />
        }
      </>
    )
  }
}

export default List