import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleEvent from "./SingleEvent";
import { s } from "../utils/Calendar";
import "../css/AllEvents.css";
import Masonry from "react-masonry-css";

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
        // <Col sm="4" className="pb-3">
        //   <SingleEvent event={e} />
        // </Col>
        <SingleEvent event={e} />
      );
    });

    const breakpoints = {
      // reduce to n column when the width < x pixels
      default: 3,
      1400: 2,
      1000: 1
    }

    return (
      // <Container className="mt-5" >
      //   <Row md={2}>
      //     {/* <Col></Col> */}
      //     {/* <Col>{eventCards}</Col> */}
      //     {eventCards}
      //   </Row>
      // </Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {eventCards}
      </Masonry>
    );
  }
}

export default AllEvents;
