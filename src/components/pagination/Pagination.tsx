import './Pagination.sass'

import React, { Component } from 'react'
import {IPaginationProps, IPaginationState} from './IPagination'


class Pagination extends Component<IPaginationProps, IPaginationState>{

  constructor(props: IPaginationProps) {
    super(props)

    this.state = {
      active: 1
    }
  }
  
  handleActive = (page: number) => this.setState({active: page})

  handleArrow = (side: string) => {
    const { active } = this.state
    const { amount } = this.props

    if (active < amount && side === 'plus') 
      this.handleActive(active + 1)

    else if (active > 1 && side === 'minus') 
      this.handleActive(active - 1)

  }

  createButtons = (amount: number) => {
    const { active } = this.state
    const buttonsArr = []

    for (let i: number = 1; i <= amount; i++){
      const layout = (
        <button
          key={i}
          onClick={() => this.handleActive(i)}
          className={`numberPage numberPage-${i} ${i === active ? 'active redC-bg': 'inactive'}`} 
        >
          {i}
        </button>
      )
      buttonsArr.push(layout)
    }

    return buttonsArr
  }

  render() {
    const { amount } = this.props

    const buttons = this.createButtons(amount)

    return (
      <div className="pagination">
        <button className="numberPage prev" onClick={() => this.handleArrow('minus')}>prev</button>
        {buttons}
        <button className="numberPage next" onClick={() => this.handleArrow('plus')}>next</button>
      </div>
    )
  }
} 

export default Pagination