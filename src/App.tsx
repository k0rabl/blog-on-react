import './App.sass'
import routes from './routes'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './components/header/Header'
import Pagination from './components/pagination/Pagination'

function App() {
  return (
    <div className="App">
      <Header title='Blog'/>
      <a className="waves-effect waves-light deep-purple lighten-3 btn"><i className="material-icons left">edit</i>Редактировать</a>

      <Router>
        <Switch>
          {routes.map(({path, component}, key) => (
            <Route key={key} path={path} component={component}/>
          ))}
        </Switch>
      </Router>

      <Pagination/>
    </div>
  );
}

export default App;
