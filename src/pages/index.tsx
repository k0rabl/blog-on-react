import { Route, Switch } from "react-router-dom"
import routes from 'app/providers/routes'

export const Routing = () => {
  return(
    <Switch>
      {routes.map(({path, component, exact}, key) => (
        <Route key={key} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  )
}