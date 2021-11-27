import React, { Component } from 'react'
import Article from '../../features/Article/component'
import Pagination from '../../features/Pagination/component/Pagination'
import { IProps, IListState } from './IList'
import IArticle from '../../features/Article/component/IArticle'

import { setActive } from '../../features/Pagination/PaginationSlice'


import { connect } from "react-redux"
import { RootState } from '../../redux/store'
import Edit from '../../features/edit'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class List extends Component<IProps, IListState>{

  constructor(props: IProps){
    super(props)

    this.state = {
      articlesArr: []
    }
  }

  handleSlise (articles: IArticle[]) {
    
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

  setSearch = () => {
    const { setActive, articles } = this.props
    const { search } = this.props.history.location;

    let filteredArticles: IArticle[] = articles

    if(search.split('=')[0] === ('?date')){
      filteredArticles = articles.filter(element => 
        element.date.indexOf(search.split('=')[1]) > -1
      )
      setActive(1)
    } else if (search.split('=')[0] === ('?string')){
      filteredArticles = articles.filter(element =>
        element.name.toLowerCase().indexOf(search.split('=')[1]) > -1
      )
      setActive(1)
    }

    this.setState({articlesArr: this.handleSlise(filteredArticles)})    
  } 

  componentDidUpdate(prevProps: IProps) {

    if (this.props === prevProps) return
    this.setSearch();    
  }

  componentDidMount() {
    this.setSearch();    
  }


  render() {
    const { articlesArr } = this.state
    const { active } = this.props

    return (
      <>
        <Edit />
        {articlesArr[active - 1]?.map(element => <Article key={element.id} {...element}/>)}
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
  articles: state.search.articles,
  filteredArticles: state.search.filteredArticles
})
const mapDispatchToProps = { setActive }

export default compose<React.ComponentType<IProps>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(List)