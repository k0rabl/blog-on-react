import React, { Component } from 'react'
import Article from '../../features/Article/component/Article'
import Pagination from '../../features/Pagination/component/Pagination'
import { IListProps, IListState } from './IList'
import IArticle from '../../features/Article/component/IArticle'


import { connect } from "react-redux"
import { RootState } from '../../redux/store'
import Edit from '../../features/edit/Edit'

class List extends Component<IListProps, IListState>{

  constructor(props: IListProps){
    super(props)

    this.state = {
      articlesArr: []
    }
  }

  handleSlise () {
    const { articles } = this.props
    
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
      
        <Edit />
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