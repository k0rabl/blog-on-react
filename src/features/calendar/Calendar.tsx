import React, { ChangeEvent, PureComponent } from 'react'
import { ICalendarState } from './ICalendar'

import './Calendar.sass'
import { RouteComponentProps, withRouter } from 'react-router-dom'

class Calendar extends PureComponent<RouteComponentProps, ICalendarState>{
  constructor(props: RouteComponentProps) {
    super(props)

    this.state = {
      dateValue: ''
    }
  }
  
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({dateValue: e.target.value })
    
    if(!e.target.value)
      this.props.history.push('/')

    this.props.history.push(`/search?date=${e.target.value}`)
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

export default withRouter(Calendar)