import React, { ChangeEvent, Component } from 'react'
import { withRouter } from "react-router"
import { Props, IState } from './IDetail';
import IArticle from "../../features/Article/component/IArticle";

import './Detail.sass'
import { handleRead, handleEditElement, handleAddElement } from '../../features/Article/ArticleSlice';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { compose } from 'redux';

const today = new Date()

class Detail extends Component<Props, IState> {

  constructor(props: Props){
    super(props)

    this.state = {
      article: {
        id: NaN,
        name: '',
        image: {},
        preview: '',
        desc: '',
        isRead: false,
        date: today.toDateString()
      }
    }
  }

  componentDidMount(){
    const { article } = this.state
    const { id } = this.props.match.params
    const { articles, handleRead } = this.props
  
    if (!id)
      return this.setState({
        article: {
          ...article,
          id: articles[articles.length-1].id + 1
        }
      })
    

    articles.forEach(element => {
      element?.id === Number(id) && this.setState({article: element})
    })

    handleRead(Number(id))
  }

  componentWillUnmount(){
    localStorage.removeItem('Articles')
    localStorage.setItem('Articles', JSON.stringify(this.props.articles))
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { article } = this.state 

    this.setState({
      article: {
        ...article,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSave = () => {
    const { article } = this.state
    const { handleEditElement, handleAddElement, history, articles } = this.props

    articles.filter(element => element.id === article.id)
      ? handleAddElement(article)
      : handleEditElement(article)
    history.goBack()
  }

  render() {
    const { article: {name, desc, date} } = this.state   
    const { editMode } = this.props
    return(
      <div className="detail">
        {
          editMode  
            ? <>              
              <input className="input input__name" type="text" name="name" value={name} onChange={this.handleChange}/>
              <textarea className="input input__desc" name="desc" value={desc} onChange={this.handleChange}/>
            </> 
            : <>
              <h1>{name}</h1>
              <p className="desc">{desc}</p>
            </>
        }

        <p className="date">{date}</p>

        <div className="buttons">
         
          <button  
            className="waves-effect waves-light redC lighten-3 btn button-second" 
            onClick={this.props.history.goBack}
          >
            Back
          </button >

          {editMode && 
            <button  
              className="waves-effect waves-light redC-bg lighten-3 btn button-primary" 
              onClick={this.handleSave}
            >
              Save
            </button > 
          } 
        </div>
       
      </div>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
  articles: state.search.filteredArticles,
  editMode: state.edit.editMode
})

const mapDispatchToProps = { handleRead, handleEditElement, handleAddElement }


export default compose<React.ComponentType<Props>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Detail)