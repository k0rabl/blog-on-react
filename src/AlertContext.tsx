import React, { Component } from 'react'

interface IState {
  isOpen: boolean
  type: string
}

const AlertContext = React.createContext({
    isOpen: false,
    type: '',
    setOpen: (c: boolean) => {},
    setType: (c: string) => {}
  })


class AlertProvider extends Component {
  // Context state
  state: IState = {
    isOpen: false,
    type: ''
  }
 

  // Method to update state
  setOpen = (isOpen: boolean) => {
    this.setState((prevState) => ({ isOpen }))
  }

  setType = (type: string) => {
    this.setState((prevState) => ({ type }))
  }

  render() {
    const { children } = this.props
    const { isOpen, type } = this.state
    const { setType, setOpen } = this

    return (
      <AlertContext.Provider
        value={{
          isOpen,
          type,
          setOpen,
          setType,
        }}
      >
        {children}
      </AlertContext.Provider>
    )
  }
}

export default AlertContext

export { AlertProvider }