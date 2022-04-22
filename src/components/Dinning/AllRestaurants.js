import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleRestaurant from "./SingleRestaurant";
import "../../css/AllEvents.css"
import Masonry from "react-masonry-css";
import restaurants from "../../resource/json/restaurant";

class AllRestaurants extends Component {
  constructor() {
    super();
  }
  
  render() {

    let restaurantCards = restaurants.map((e) => {
      return <SingleRestaurant res={e} />;
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
        {restaurantCards}
      </Masonry>
    );
  }
}

export default AllRestaurants;
