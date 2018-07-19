import * as React from 'react'
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignOut extends React.Component {

  handleSignOut = (e) => {
    e.preventDefault()
    Auth.signOut()
      .then((success) => {
        console.log('signed out')
        this.props.history.replace('/')
      })
      .catch(console.log('unable to sign out'))
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Want to be forgotten?</CardTitle>
          <CardText>You might want to sign out if you are using a shared computer.</CardText>
          <Button onClick={this.handleSignOut}>Sign Out</Button>
        </CardBody>
      </Card>
    )
  }
}

export default withRouter(SignOut)
