import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { handleMode } from '../modeSlice'
import { IEditProps, IEditState } from './IEdit'

import './Edit.sass'
import { RootState } from '../../../redux/store'
import { Link } from 'react-router-dom'
import ModalContext from '../../../Context/ModalContext'

export class Edit extends PureComponent<IEditProps, IEditState>{
  static contextType = ModalContext  

  handleClick = () => {
    const { handleMode } = this.props  
    const { setOpen } = this.context 

    setOpen(false)
    handleMode()
  }

  handleShowModal = () => { 
    const { setOpen, setHandler, setType } = this.context 

    setOpen(true)
    setType('edit')
    setHandler(this.handleClick)
  }

  render() {
    const { editMode } = this.props
    const user = (
      <div className={`editMode__container editMode__container${editMode ? '': '-user'}`}>
        <button  className="btn-edit button" onClick={this.handleClick}>
          <i className="material-icons left">edit</i>
          Edit mode
        </button > 
      </div>
    )

    const edit = (
      <div className={`editMode__container editMode__container${editMode ? '-edit' : ''}`}>
        <Link to='/add' className="waves-effect waves-light redC-bg lighten-3 btn btn-add button">
          <i className="material-icons left">add</i>
          Add article
        </Link > 
        <button  className="btn-close button" onClick={this.handleShowModal}>
          <i className="material-icons left">close</i>
          Exit
        </button > 
      </div>
    )

    return (
      <>
        {editMode ? edit : user}
      </>
    )
  }
} 

const mapDispatchToProps = { handleMode }

const mapStateToProps = (state: RootState) => ({
  editMode: state.edit.editMode
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
