import React from 'react'
import {withRouter, Router, Route, Switch} from 'react-router-dom'
import history from './history'
// import Routes from './routes'
import Invite from './components/invite'
import RSVP from './components/rsvp'
import Attend from './components/attend'
import Decline from './components/decline'

const App = () => {
  return (
    <div>
      <Router history={history}>
      {/* <Routes /> */}
        <Switch>
          <Route exact path="/" component={Invite} />
          <Route exact path="/invite" component={Invite} />
          <Route exact path="/rsvp" component={RSVP} />
          <Route exact path="/attend" component={Attend} />
          <Route exact path="/decline" component={Decline} />
        </Switch>
      </Router>
    </div>
  )
}

export default withRouter(App)
