import React, { PureComponent } from 'react'
import { ArticleProps, IState } from './IArticle'

import './Article.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store'
import { handleDeleteElement } from '../ArticleSlice'
import { Modal } from '../../Modal'
import AlertContext from '../../../AlertContext'

class Article extends PureComponent<ArticleProps, IState> {
  static contextType = AlertContext

  constructor(props: ArticleProps){
    super(props)

    this.state = {
      opened: false
    }
  }

  handleDelete = () => {
    const { setOpen, setType } = this.context 
    const { id, handleDeleteElement } = this.props
    
    handleDeleteElement(Number(id))
    
    setOpen(true)
    setType('Delete')
    this.setState({opened: false})
  }



  handleShowModal = () => {
    const { opened } = this.state
    this.setState({opened: !opened})
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
                
                {/* <button  className="waves-effect waves-light redC-bg lighten-3 btn btn-edit" onClick={() => console.log('edit')}>
                  <i className="material-icons center">edit</i>
                </button > */} 
              </div>
            }
          </div>
          
          <div className="date">{date}</div>
        </div>
        <div className="bottom">
          <div className="image"></div>
          <div className="descr">{desc}</div>
        </div>
        <Modal 
          opened={this.state.opened}
          onClose={this.handleShowModal} 
          onAccept={this.handleDelete} 
          type='delete'
        />
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