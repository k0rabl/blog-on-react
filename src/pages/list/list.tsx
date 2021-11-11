import React, { Component } from 'react'
import Articles from '../../fixtures/Articles'
import Article from '../../components/article/Article'
import Pagination from '../../components/pagination/Pagination'
import { IListProps, IListState } from './IList'
import IArticle from '../../components/article/IArticle'
class List extends Component<IListProps, IListState>{

  constructor(props: IListProps){
    super(props)

    this.state = {
      articlesArr: [],
      active: 0
    }
  }

  componentDidMount() {
    let page: IArticle[]  = []
    const pages: IArticle[][] = [];

    Articles.forEach((element, index) => {
      page.push(element)

      if (index > 0 && (index % 4 === 0 || index === Articles.length - 1 )) {
        pages.push(page)
        page = []
      }

    })  
    
    this.setState({articlesArr: pages})
  }

  render() {
    const { articlesArr, active } = this.state

    return (
      <>
        {articlesArr[active]?.map((element, index) => <Article key={index} {...element}/>)}
        { 
          articlesArr.length > 1 && 
          <Pagination amount={articlesArr.length} />
        }
      </>
    )
  }
}

export default List