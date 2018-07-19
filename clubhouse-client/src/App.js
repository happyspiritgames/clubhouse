import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import DesignAGamePage from './components/DesignAGamePage';
import JoinPage from './components/JoinPage';
import PrivateRoute from './security/PrivateRoute';
import SignInCallback from './components/SignInCallback';
import WelcomePage from './components/WelcomePage';

const App = () => (
  <div className="container-fluid">
    <Header />
    <main>
      <Switch>
        <PrivateRoute path='/design-a-game' component={DesignAGamePage} />
        <Route path='/signin' component={SignInCallback} />
        <Route path='/join' component={JoinPage} />
        <Route component={WelcomePage} />
      </Switch>
    </main>
  </div>
);

export default App;
