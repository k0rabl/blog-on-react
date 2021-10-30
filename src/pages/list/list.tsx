import React, { Component } from 'react'
import Articles from '../../fixtures/Articles'
import Article from '../../components/article/Article'
class List extends Component{
  render() {
    return (
      <>
        {Articles.map((element, index) => <Article key={index} {...element}/>)}
      </>
    )
  }
}

export default List