import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class SignInPanel extends React.Component {
  state = {
    toProviderSignIn: false
  }

  handleSignIn = () => {
    this.setState({
      toProviderSignIn: true
    })
  }

  render() {
    const cognitoEndpoint = 'https://happyspiritgames.auth.us-west-2.amazoncognito.com'
    const responseType = 'token'
    const clientId = '3jgcupa4o95gcq98qmimb2qqt7'
    const redirectUrl = 'http://localhost:3000/signin';
    const signInUrl = `${cognitoEndpoint}/login?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUrl}`
    if (this.state.toProviderSignIn) {
      window.location = signInUrl;
      return null;
    }

    return (
      <Card>
        <CardBody>
          <CardTitle>Free Member Access</CardTitle>
          <CardText>Anyone can sign up. It's free! Once you are a member, you can access all of the great members-only content. Wow!</CardText>
          <Button onClick={this.handleSignIn}>Sign Up or Sign In</Button>
        </CardBody>
      </Card>
    );
  }
}

export default SignInPanel;
