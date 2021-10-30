import './Header.sass'

import React, { Component } from "react"
import HeaderProps from "../../interfaces/Header"
import Calendar from "../calendar/Calendar"
import Search from "../Search/Search"

class Header extends Component<HeaderProps> {
  constructor(props: HeaderProps){
    super(props)
    
  }

  render() {
    return (
      <header>
          <Search/>
          <div className="brand-logo s6">{this.props.title}</div>
          <Calendar/>
      </header>
    )
  }
} 

export default Header