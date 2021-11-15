import './App.sass'
import routes from './routes'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './components/header/Header'
import Edit from './components/edit/Edit'
// import Detail from './pages/detail/detail';

class App extends Component {
 

  render(){
    return (
      <div className="App">
        <Header title='Blog'/>
        <Edit />
  
        <Router>
          <Switch>
            {routes.map(({path, component, exact}, key) => (
              <Route key={key} exact={exact} path={path} component={component} /* children={<Child/>} *//>
            ))}
          </Switch>
        </Router>
      </div>
    )
  }
  
}

// function Child() {
//   // We can use the `useParams` hook here to access
//   // // the dynamic pieces of the URL.
//   // let { children } = useParams();

//   return (
//     <Detail/>
//   );
// }

export default App;
