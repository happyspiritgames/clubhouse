import * as React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../security/fakeAuth';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        <Button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </Button>
      </p>
    ) : (
      <CardText>You are not logged in.</CardText>
    )
);

class SignOutPanel extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Leaving so soon?</CardTitle>
          <AuthButton />
        </CardBody>
      </Card>
    );
  }
}

export default SignOutPanel;
