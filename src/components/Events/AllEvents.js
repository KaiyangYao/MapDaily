import React, { Component } from "react";
import fetchEvents from "../../utils/Calendar";
import SingleEvent from "./SingleEvent";
import SingleEventV2 from "./SingleEventV2";
import Masonry from "react-masonry-css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Events/AllEvents.css";

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      isLoadingEvents: true,
    };
  }

  componentDidMount() {
    fetchEvents((events) => {
      this.setState({ events: events, isLoadingEvents: false });
    });
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
      return <SingleEventV2 event={e} />;
    });

    const breakpoints = {
      // reduce to n column when the width < x pixels
      default: 3,
      1400: 2,
      1000: 1,
    };

    return (
      <div>
        {this.state.isLoadingEvents && (
          <h1 className="events_warning">Loading...</h1>
        )}
        {!this.state.isLoadingEvents && eventsToday.length == 0 && (
          <h1 className="events_warning">No events today</h1>
        )}
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {eventCards}
        </Masonry>
      </div>
    );
  }
}

export default AllEvents;
