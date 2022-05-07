import React, { Component } from "react";
import restaurants from "../../resource/json/restaurant";
import SingleRestaurant from "./SingleRestaurant";
import "../../css/Restaurants/Restaurant.scss";

class AllRestaurants extends Component {
  render() {
    let restaurantCards = restaurants.map((e) => {
      return <SingleRestaurant rest={e} />;
    });

    return <main className="page-content">{restaurantCards}</main>;
  }
}

export default AllRestaurants;
