import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Props, IState } from './IDetail';

import './Detail.sass'
import { handleRead } from '../../features/Article/ArticleSlice';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { compose } from 'redux';


class Detail extends Component<Props, IState> {

  constructor(props: Props){
    super(props)

    this.state = {
      article: this.props.articles[0] // TODO:  Question! Don't forget!
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params
    const { articles, handleRead } = this.props

    articles.forEach(element => {
      element?.id === Number(id) && this.setState({article: element})
    })

    handleRead(Number(id))
  }

  componentWillUnmount(){
    localStorage.removeItem('Articles')
    localStorage.setItem('Articles', JSON.stringify(this.props.articles))
  }

  render() {
    const { article } = this.state   
    return(
      <div>
        <h1>{article.name}</h1>
        <p className="desc">{article.desc}</p>
        <p className="date">{article.date}</p>

        <button  
          className="waves-effect waves-light redC-bg lighten-3 btn" 
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button > 
      </div>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
  articles: state.search.filteredArticles
})

const mapDispatchToProps = { handleRead }


export default compose<React.ComponentType<Props>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Detail)