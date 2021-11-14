import React, { Component } from 'react'
import Articles from '../../fixtures/Articles'
import Article from '../../components/article/Article'
import Pagination from '../../components/pagination/Pagination'
import { IListProps, IListState } from './IList'
import IArticle from '../../components/article/IArticle'


import { connect } from "react-redux"
import { RootState } from '../../redux/store'

class List extends Component<IListProps, IListState>{

  constructor(props: IListProps){
    super(props)

    this.state = {
      articlesArr: []
    }
  }

  handleSlise () {
    const { articles } = this.props
    
    console.log('articles: ', articles);
    
    let page: IArticle[]  = []
    const pages: IArticle[][] = [];  

    articles.forEach((element, index) => {
      page.push(element)

      if (articles.length === 1)
        pages.push([...articles])

      if (index > 0 && (index % 4 === 0 || index === articles.length - 1 )) {
        pages.push(page)
        page = []
      }

    })  

    return pages
  }

  componentDidUpdate(prevProps: IListProps) {
    if (this.props.articles !== prevProps.articles)
      this.setState({articlesArr: this.handleSlise()})
  }

  componentDidMount() {
    this.setState({articlesArr: this.handleSlise()})
  }


  render() {
    const { articlesArr } = this.state
    const { active } = this.props

    return (
      <>
        {articlesArr[active - 1]?.map((element, index) => <Article key={index} {...element}/>)}
        { 
          articlesArr.length > 1 && 
          <Pagination amount={articlesArr.length}/>
        }
      </>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
  active: state.pagination.active,
  articles: state.search.filteredArticles
})


export default connect(mapStateToProps)(List)