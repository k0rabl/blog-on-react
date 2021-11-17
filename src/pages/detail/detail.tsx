import React, { ChangeEvent, PureComponent } from 'react'
import { withRouter } from "react-router"
import { Props, IState } from './IDetail';

import './Detail.sass'
import { handleRead, handleEditElement } from '../../features/Article/ArticleSlice';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { compose } from 'redux';


class Detail extends PureComponent<Props, IState> {

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
    const { handleEditElement, history } = this.props

    
    handleEditElement(article)
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

const mapDispatchToProps = { handleRead, handleEditElement }


export default compose<React.ComponentType<Props>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Detail)