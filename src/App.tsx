import './App.sass'
import routes from './routes'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './features/header/Header'
import Edit from './features/edit/Edit'

class App extends Component {
 
  render(){
    return (
      <div className="App">
        <Header title='Blog'/>
        <Edit />
  
        <Router>
          <Switch>
            {routes.map(({path, component, exact}, key) => (
              <Route key={key} exact={exact} path={path} component={component} />
            ))}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
