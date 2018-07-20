import React from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Form, Input } from 'reactstrap'

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange(e) {
    const name = e.target.id
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    Auth.signIn(this.state.email, this.state.password)
      .then((success) => {
        console.log('signed in', success)
        this.props.history.push('/design-a-game')
      })
      .catch((err) => {
        console.log('sign-in error', err)
      })
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Sign In</CardTitle>
            <CardText>You have to sign in to access the course.</CardText>
            <Form id="signInForm" onSubmit={(e) => this.handleSubmit(e)}>
              <Input 
                id="email" 
                type="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
              <Input 
                id="password" 
                type="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={(e) => this.handleChange(e)}
              />
              <Input type="submit" value="Sign In"/>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(SignIn);