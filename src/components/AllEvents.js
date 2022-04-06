import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleEvent from "./SingleEvent";
import { s } from "./Calendar";
import "bootstrap/dist/css/bootstrap.min.css";

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: s,
    };
  }

  render() {
    let eventCards = this.state.events.map((e) => {
      return (
        <Col sm="4" className="pb-3">
          <SingleEvent event={e} />
        </Col>
      );
    });

    return (
      <Container className="mt-5">
        <Row md={2}>
          {/* <Col></Col> */}
          {/* <Col>{eventCards}</Col> */}
          {eventCards}
        </Row>
      </Container>
    );
  }
}

export default AllEvents;
