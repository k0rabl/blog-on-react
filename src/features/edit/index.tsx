import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { handleMode } from './modeSlice'
import { IEditProps, IEditState } from './IEdit'

import './Edit.sass'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
import { Modal } from '../Modal'

class Edit extends PureComponent<IEditProps, IEditState>{

  constructor(props: IEditProps){
    super(props);

    this.state = {
      opened: false
    }
  }
  
  handleClick = () => {
    const { handleMode } = this.props  

    handleMode()
    this.setState({opened: false})
  }

  handleShowModal = () => {
    const { opened } = this.state
    this.setState({opened: !opened})
  }

  render() {
    const { editMode } = this.props
    const user = (
      <div className={`editMode__container editMode__container${editMode ? '': '-user'}`}>
        <button  className="waves-effect waves-light redC-bg lighten-3 btn" onClick={this.handleClick}>
          <i className="material-icons left">edit</i>
          Edit
        </button > 
      </div>
    )

    const edit = (
      <div className={`editMode__container editMode__container${editMode ? '-edit' : ''}`}>
        <Link to='/add' className="waves-effect waves-light redC-bg lighten-3 btn">
          <i className="material-icons left">add</i>
          Add article
        </Link > 
        <button  className="waves-effect waves-light redC-bg lighten-3 btn" onClick={this.handleShowModal}>
          <i className="material-icons left">close</i>
          Exit
        </button > 
      </div>
    )

    return (
      <>
        {editMode ? edit : user}
        <Modal 
          opened={this.state.opened}
          onClose={this.handleShowModal} 
          onAccept={this.handleClick} 
          type='edit'
        />
      </>
    )
  }
} 

const mapDispatchToProps = { handleMode }

const mapStateToProps = (state: RootState) => ({
  editMode: state.edit.editMode
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
