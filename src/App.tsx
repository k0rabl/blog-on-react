import './App.sass'
import routes from './routes'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './components/header/Header'
// import Detail from './pages/detail/detail';

function App() {
  return (
    <div className="App">
      <Header title='Blog'/>
      <a href="/" className="waves-effect waves-light redC-bg lighten-3 btn"><i className="material-icons left">edit</i>Редактировать</a>

      <Router>
        <Switch>
          {routes.map(({path, component}, key) => (
            <Route key={key} path={path} component={component} /* children={<Child/>} *//>
          ))}
        </Switch>
      </Router>
    </div>
  );
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
