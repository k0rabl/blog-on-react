import './Header.sass'

import React, { Component } from "react"
import IHeader from "./IHeader"
import Calendar from "../calendar/Calendar"
import Search from "../Search/Search"

class Header extends Component<IHeader> {
 /*  constructor(props: IHeader){
    super(props)
    
  } */

  render() {
    return (
      <header>
          <Search/>
          <div className="brand-logo s6 redC">{this.props.title}</div>
          <Calendar/>
      </header>
    )
  }
} 

export default Header