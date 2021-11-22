import './App.sass'
import routes from './routes'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { AlertProvider } from './AlertContext'

import Header from './features/header/Header'
import { Alert } from './features/Alert'


class App extends Component {
  

  render(){
    return (
      <AlertProvider >
        <div className="App">
          <Alert />
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
    )
  }
}

export default App;
