import React, { PureComponent } from 'react'
import { ArticleProps, IState } from './IArticle'

import './Article.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store'
import { handleDeleteElement } from '../ArticleSlice'

// import AlertContext from '../../../Context/AlertContext'
import ModalContext from '../../../Context/ModalContext'

class Article extends PureComponent<ArticleProps, IState> {
  static contextType = ModalContext /* AlertContext */ 

  handleDelete = () => {
    const { setOpen } = this.context 
    const { id, handleDeleteElement } = this.props

    setOpen(false)
    handleDeleteElement(Number(id))
  }

  handleShowModal = () => {
    const { setOpen, setType, setHandler } = this.context 
    
    setType('delete')
    setOpen(true)
    setHandler(this.handleDelete)
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
              <div className={`title ${isRead && 'read'} ${editMode && 'edit'}`}>{name}</div>
            </Link>
            
            {editMode && 
              <div className="buttons">
                <button  className="waves-effect waves-light redC-bg lighten-3 btn btn-delete" onClick={this.handleShowModal}>
                  <i className="material-icons center">delete</i>
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
  editMode: state.edit.editMode
})

const mapDispatch = { handleDeleteElement }

export default connect(mapStateToProps, mapDispatch)(Article)