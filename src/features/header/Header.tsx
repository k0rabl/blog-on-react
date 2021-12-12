import './Header.sass'

import React, { Component } from "react"
import {IProps} from "./IHeader"
import Calendar from "../calendar"
import Search from "../Search/component/Search"
import { RootState } from '../../redux/store'
import { connect } from 'react-redux'

class Header extends Component<IProps> {
  render() {    
    const colorTitle = this.props.editMode ? 'logo-active' : ''
    return (
      <header className='header'>
          <div className="header__container">
            <Search />
            <div className={`brand-logo s6 redC ${colorTitle}`}>{this.props.title}</div>
            <Calendar />
          </div>
      </header>
    )
  }
} 



const mapStateToProps = (state: RootState) => ({
  editMode: state.edit.editMode
})

export default connect(mapStateToProps, null)(Header)
// export default Header