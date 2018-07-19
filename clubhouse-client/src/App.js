import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './components/Header';
import DesignAGamePage from './components/DesignAGamePage';
import JoinPage from './components/JoinPage';
// import PrivateRoute from './security/PrivateRoute';
import Amplify from 'aws-amplify'
import SignInCallback from './components/SignInCallback';
import WelcomePage from './components/WelcomePage';

const isAuthenticated = () => Amplify.Auth.user !== null;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props => (
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect to='/join' />
      )}
  />
)

const App = () => (
  <Container>
    <Header />
    <main>
      <Switch>
        <PrivateRoute path='/design-a-game' component={DesignAGamePage} />
        <Route path='/signin' component={SignInCallback} />
        <Route path='/join' component={JoinPage} />
        <Route component={WelcomePage} />
      </Switch>
    </main>
  </Container>
);

export default App;
