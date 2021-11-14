import React, { ChangeEvent, Component } from 'react'
import { connect } from 'react-redux'
import {handleFilterDate, handleDrop} from '../Search/SearchSlice'
import { ICalendarProps, ICalendarState } from './ICalendar'

class Calendar extends Component<ICalendarProps, ICalendarState>{
  
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { handleFilterDate } = this.props

    this.setState({dateValue: e.target.value })
    handleFilterDate(e.target.value)
  }

  render() {

    return (
      <div className="input-field inline s6">
        <input type='date' onChange={(e) => this.handleChange(e)}/>
      </div>
    )
  }
} 

const mapDispatchToProps = { handleFilterDate, handleDrop }

export default connect(null, mapDispatchToProps)(Calendar)
