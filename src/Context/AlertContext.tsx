import React, { Component } from 'react' 

interface IState {
  isOpen: boolean
  message: string
}

const AlertContext = React.createContext({
    isOpen: false,
    message: '',
    setOpen: (c: boolean) => {},
    setType: (c: string) => {}
  })


class AlertProvider extends Component {
  // Context state
  state: IState = {
    isOpen: false,
    message: ''
  }
 

  // Method to update state
  setOpen = (isOpen: boolean) => {
    this.setState((prevState) => ({ isOpen }))
  }

  setType = (message: string) => {
    this.setState((prevState) => ({ message }))
  }

  render() {
    const { children } = this.props
    const { isOpen, message } = this.state
    const { setType, setOpen } = this

    return (
      <AlertContext.Provider
        value={{
          isOpen,
          message,
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