import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AnonymousHomePage from './components/AnonymousHomePage';
import Header from './components/Header';
import JoinPage from './components/JoinPage';
import MemberHomePage from './components/MemberHomePage';
import SignInCallback from './components/SignInCallback';
import PrivateRoute from './security/PrivateRoute';

const App = () => (
  <div className="container-fluid">
    <Header />
    <main>
      <Switch>
        <PrivateRoute path='/member' component={MemberHomePage} />
        <Route path='/join' component={JoinPage} />
        <Route path='/signin' component={SignInCallback} />
        <Route component={AnonymousHomePage} />
      </Switch>
    </main>
  </div>
);

// add a route to a join page for anyone who tried to go to a protected area

export default App;
