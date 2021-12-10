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
          <Router>
            <div className="App">
              <Header title='Blog'/>
        
              <Switch>
                {routes.map(({path, component, exact}, key) => (
                  <Route key={key} exact={exact} path={path} component={component} />
                ))}
              </Switch>

              
              <Alert />
              <Modal />
            </div>
          </Router>
        </AlertProvider>
      </ModalProvider>
    )
  }
}

export default App;
