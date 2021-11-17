import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { handleMode } from './modeSlice'
import { IEditProps } from './IEdit'

import './Edit.sass'
import { RootState } from '../../redux/store'

class Edit extends PureComponent<IEditProps>{
  
  handleClick = () => {
    const { handleMode } = this.props  

    handleMode()
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
        <button  className="waves-effect waves-light redC-bg lighten-3 btn">
          <i className="material-icons left">add</i>
          Add article
        </button > 
        <button  className="waves-effect waves-light redC-bg lighten-3 btn" onClick={this.handleClick}>
          <i className="material-icons left">close</i>
          Exit
        </button > 
      </div>
    )

    return editMode ? edit : user
  }
} 

const mapDispatchToProps = { handleMode }

const mapStateToProps = (state: RootState) => ({
  editMode: state.edit.editMode
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
