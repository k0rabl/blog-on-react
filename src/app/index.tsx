import './index.sass'
import React, { Component } from 'react'

import { BrowserRouter as Router } from "react-router-dom"
import { AlertProvider } from 'context/AlertContext'
import { ModalProvider } from 'context/ModalContext'

import { Routing } from 'pages'

import Header from 'features/header/Header'
import { Alert } from 'features/Alert'
import { Modal } from 'features/Modal'

class App extends Component {
  render(){
    return (
      <ModalProvider >
        <AlertProvider >
          <Router>
            <div className="App">
              <Header title='Blog'/>
      
              <Routing/>

              <Alert />
              <Modal />
            </div>
          </Router>
        </AlertProvider>
      </ModalProvider>
    )
  }
}

export default App
