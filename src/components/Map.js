import React from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import buildings from "../resource/json/buildings";



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const style = {
  width: "90%",
  height: "600px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [44.9379, -93.1691],
      zoom: 16,
      layers: [
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', { 
            attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18, 
            id: 'mapbox/streets-v11', 
            accessToken: 'pk.eyJ1IjoiZXJpY2xpMTIzMzIiLCJhIjoiY2wxMnU2dXJrMzd3dTNpcGtva2xkOW52eCJ9.QHypxQDAlVZnHPD5oVDyNg' })
      ]
    });
    L.geoJSON(buildings).addTo(this.map);
  }

  componentDidUpdate({markerPosition}) {
    // check if position has changed
    if(this.props.diningclicked && this.marker === undefined){
      this.marker = L.marker(this.props.markerPosition).addTo(this.map).on('click',function(){console.log("Hello")});
    }
    else if(!this.props.diningclicked && this.marker !== undefined){
      this.map.removeLayer(this.marker);
      this.marker = undefined;
    }
    console.log(this.marker)
  }

  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
