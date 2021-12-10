import React, { ChangeEvent, PureComponent } from 'react'
import { ICalendarState } from './ICalendar'

import './Calendar.sass'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActive } from '../Pagination/PaginationSlice'

class Calendar extends PureComponent<RouteComponentProps<{}>, ICalendarState>{
  constructor(props: RouteComponentProps) {
    super(props)

    this.state = {
      dateValue: ''
    }
  }
  
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({dateValue: e.target.value })
    this.props.history.push(`/search?date=${e.target.value}`)
    
    if(!e.target.value)
      this.props.history.push('/')
      
    setActive(1)
  }

  componentDidMount = () => {
    const searchStr = this.props.history.location.search.split('=')
    
    if(searchStr?.[0] === '?date')
      this.setState({dateValue: searchStr[1]})
  }
  
  render() {

    return (
      <div className="input-field inline s6">
        <input type='date' onChange={this.handleChange} value={this.state.dateValue}/>
      </div>
    )
  }
} 


export default withRouter(connect(
  null,
  { setActive },
)(Calendar));