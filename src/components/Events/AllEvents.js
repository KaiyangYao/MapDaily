import React, { Component } from "react";
import { s } from "./utils/Calendar";
import SingleEvent from "./SingleEvent";
import Masonry from "react-masonry-css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/AllEvents.css"

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: s,
    };
  }
  
  render() {
    var targetDate = this.props.date;

    var eventsToday = this.state.events.filter((e) => {
      var date = new Date(e.date);
      return (
        date.getUTCMonth() + 1 === targetDate.getUTCMonth() + 1 &&
        date.getUTCDate() === targetDate.getUTCDate()
      );
    });

    let eventCards = eventsToday.map((e) => {
      return <SingleEvent event={e} />;
    });

    const breakpoints = {
      // reduce to n column when the width < x pixels
      default: 3,
      1400: 2,
      1000: 1,
    };

    return (
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
