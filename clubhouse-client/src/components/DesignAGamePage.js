import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'reactstrap'
import SignOut from '../security/SignOut'

class DesignAGamePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center">Design a Game</h1>
          <p>This introductory course will show you how to get started designing games. All you need is time and creativity.</p>
        </Jumbotron>
        <Row>
          <Col>
            <p>This is the course material. We recommend reviewing the materials in order.</p>
            <ul>
              <li>Introduction</li>
              <li>Part I.1</li>
              <li>Part I.2</li>
              <li>Part I.3</li>
              <li>And so on</li>
            </ul>
          </Col>
          <Col>
            <SignOut />
          </Col>
        </Row>
      </div>
    )
  }
}

export default DesignAGamePage
