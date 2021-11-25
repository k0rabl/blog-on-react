import React, { ChangeEvent, PureComponent } from 'react'
import { connect } from 'react-redux'
import {handleDrop} from '../Article/ArticleSlice'
import { IProps, ICalendarState } from './ICalendar'

import './Calendar.sass'
import { withRouter } from 'react-router-dom'

class Calendar extends PureComponent<IProps, ICalendarState>{
  
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.history.push(`?date=${e.target.value}`)
    
    this.setState({dateValue: e.target.value })
  }
  
  componentWillUnmount = () => {
    handleDrop()
  }

  render() {

    return (
      <div className="input-field inline s6">
        <input type='date' onChange={this.handleChange}/>
      </div>
    )
  }
} 

const mapDispatchToProps = { handleDrop }

export default withRouter(connect(null, mapDispatchToProps)(Calendar))
