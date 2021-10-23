import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './container/home'
import { NewsPage } from './container/news'

export const App = () => {
  return (
    <>
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/news`} component={NewsPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
