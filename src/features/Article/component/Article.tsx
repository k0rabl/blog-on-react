import React, { PureComponent } from 'react'
import { ArticleProps } from './IArticle'

import './Article.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store'
import { handleDeleteElement } from '../ArticleSlice'

class Article extends PureComponent<ArticleProps> {

  handleDelete = () => {
    const {id, handleDeleteElement, articles} = this.props
    
    //TODO:don't delete last elemnt
    handleDeleteElement(Number(id))
    
    localStorage.removeItem('Articles')
    localStorage.setItem('Articles', JSON.stringify(articles))
  }

  render() {
    const { 
      id, 
      date, 
      name, 
      desc, 
      isRead,
      editMode
    } = this.props   
    
    return (
      <div className="container article">
        <div className="top">
          <div className="top-left">
            
            <Link to={`/${id}`} className="link articleLink">
              <div className={`title ${isRead && 'read'}`}>{name}</div>
            </Link>
            
            {editMode && 
              <div className="buttons">
                <button  className="waves-effect waves-light redC-bg lighten-3 btn btn-delete" onClick={this.handleDelete}>
                  <i className="material-icons center">delete</i>
                </button > 
                
                <button  className="waves-effect waves-light redC-bg lighten-3 btn btn-edit" onClick={() => console.log('edit')}>
                  <i className="material-icons center">edit</i>
                </button > 
              </div>
            }
          </div>
          
          <div className="date">{date}</div>
        </div>
        <div className="bottom">
          <div className="image"></div>
          <div className="descr">{desc}</div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
  editMode: state.edit.editMode,
  articles: state.search.filteredArticles
})

const mapDispatch = { handleDeleteElement }

export default connect(mapStateToProps, mapDispatch)(Article)