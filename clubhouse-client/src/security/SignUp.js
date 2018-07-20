import React from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Form, Input } from 'reactstrap'

class SignUp extends React.Component {

  state = {
    stage: 0,
    joinEmail: '',
    joinPassword: '',
    joinPasswordRepeat: ''
  }

  // need to confirm email

  handleChange(e) {
    const name = e.target.id
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    Auth.signUp(this.state.email, this.state.password)
      .then((success) => {
        console.log('registered', success)
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
            <CardTitle>Join Happy Spirit Games</CardTitle>
            <CardText>Once you join, good things will happen.</CardText>
            <Form id="signUpForm" onSubmit={(e) => this.handleSubmit(e)}>
              <Input 
                id="joinEmail" 
                type="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
              <Input 
                id="joinPassword" 
                type="password" 
                placeholder="Choose a password" 
                value={this.state.password} 
                onChange={(e) => this.handleChange(e)}
              />
              <Input 
                id="joinPasswordRepeat" 
                type="password" 
                placeholder="Re-type password" 
                value={this.state.password} 
                onChange={(e) => this.handleChange(e)}
              />
              <Input color="primary" type="submit" value="Sign Up"/>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(SignUp);