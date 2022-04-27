import React, { Component } from "react";
import restaurants from "../../resource/json/restaurant";
import "../../css/SingleRestaurant.scss";
import SingleRestaurant2 from "./SingleRestaurant2";

class AllRestaurants2 extends Component {
  constructor() {
    super();
  }

  render() {
      let restaurantCards = restaurants.map((e) => {
        return <SingleRestaurant2 rest={e} />;
      });


    return (
      <main class="page-content">
        {restaurantCards}
      </main>
    );
  }
}

export default AllRestaurants2;
