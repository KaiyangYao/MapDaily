import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard";
import AllEvents from "./AllEvents";

class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="mt-5">
            <Dashboard />
          </Col>

          <Col className="mt-5">
            <AllEvents />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
