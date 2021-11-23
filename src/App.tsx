import './App.sass'
import routes from './routes'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { AlertProvider } from './Context/AlertContext'
import { ModalProvider } from './Context/ModalContext'

import Header from './features/header/Header'
import { Alert } from './features/Alert'
import { Modal } from './features/Modal'


class App extends Component {
  

  render(){
    return (
      <ModalProvider >
        <AlertProvider >
          <div className="App">
            <Alert />
            <Modal />
            <Header title='Blog'/>
      
            <Router>
              <Switch>
                {routes.map(({path, component, exact}, key) => (
                  <Route key={key} exact={exact} path={path} component={component} />
                ))}
              </Switch>
            </Router>
          </div>
        </AlertProvider>
      </ModalProvider>
    )
  }
}

export default App;
