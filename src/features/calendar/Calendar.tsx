import React, { ChangeEvent, PureComponent } from 'react'
import { connect } from 'react-redux'
import {handleFilterDate, handleDrop} from '../Article/ArticleSlice'
import { setActive } from '../Pagination/PaginationSlice'
import { ICalendarProps, ICalendarState } from './ICalendar'

import './Calendar.sass'

class Calendar extends PureComponent<ICalendarProps, ICalendarState>{
  
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { handleFilterDate } = this.props

    this.setState({dateValue: e.target.value })
    setActive(1)
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

const mapDispatchToProps = { handleFilterDate, handleDrop, setActive }

export default connect(null, mapDispatchToProps)(Calendar)
