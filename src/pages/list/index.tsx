import React, { Component } from 'react'
import Article from '../../features/Article/component'
import Pagination from '../../features/Pagination/component/Pagination'
import { IProps, IListState } from './IList'
import IArticle from '../../features/Article/component/IArticle'

import {handleFilterDate} from '../../features/Article/ArticleSlice'
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

  componentDidUpdate(prevProps: IProps) {

    if (this.props === prevProps) return
    
    // const { setActive, handleFilterDate, filteredArticles, articles } = this.props
    // const { search } = this.props.history.location;

    // if(search) {
    //   if(search.indexOf('?saerch')){
        
    //     setActive(1)
    //     handleFilterDate(search.split('=')[1])

    //     this.setState({articlesArr: this.handleSlise(filteredArticles)})
    //   }

    //   return
    // }
    
    
    //   this.setState({articlesArr: this.handleSlise(articles)})
  }

  componentDidMount() {
    const { setActive, handleFilterDate, filteredArticles, articles } = this.props
    const { search } = this.props.history.location;   

    if(search) {
      if(search.indexOf('?date') > -1){
        
        setActive(1)
        handleFilterDate(search.split('=')[1])
        console.log(filteredArticles)

        this.setState({articlesArr: this.handleSlise(filteredArticles)})
      }

      return
    }
    
    // this.setState({articlesArr: this.handleSlise(this.props.articles)})
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
const mapDispatchToProps = { handleFilterDate, setActive }

export default compose<React.ComponentType<IProps>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(List)