import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import buildings from "../../resource/json/building";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';
import LocateControl from 'react-leaflet-locate-control'

const mapStateToProps = (state) => ({
  buildingsfromRedux: state.buildings,
});

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const style = {
  width: "100%",
  height: "800px",
};

var defaultStyle = {
  color: "#2262CC",
  weight: 2,
  opacity: 0.6,
  fillOpacity: 0.1,
  fillColor: "#2262CC",
};

var onEachFeature = function (feature, layer) {
  // All we're doing for now is loading the default style.
  // But stay tuned.
  layer.setStyle(defaultStyle);
};

class Map extends React.Component {
  state = {
    buildings: buildings,
  };

  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [44.9379, -93.1691],
      zoom: 16,
      layers: [
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            attribution:
              'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            accessToken:
              "pk.eyJ1IjoiZXJpY2xpMTIzMzIiLCJhIjoiY2wxMnU2dXJrMzd3dTNpcGtva2xkOW52eCJ9.QHypxQDAlVZnHPD5oVDyNg",
          }
        ),
      ],
    })
    // .locate({ setView: true, maxZoom: 16 });

    

    this.geometries = L.geoJSON(this.state.buildings, {
      onEachFeature: onEachFeature,
      filter: function (feature, layer) {
        return feature.properties.show_on_map;
      },
    }).addTo(this.map);


    const locateOptions = {
      position: 'topright',
      strings: {
          title: 'Show me where I am, yo!'
      },
      onActivate: () => {} // callback before engine starts retrieving locations
    };
    
    <LocateControl options={locateOptions} startDirectly/>
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.buildingsfromRedux != this.props.buildingsfromRedux) {
      this.map.removeLayer(this.geometries);
      this.geometries = L.geoJSON(this.props.buildingsfromRedux, {
        onEachFeature: onEachFeature,
        filter: function (feature, layer) {
          return feature.properties.show_on_map;
        },
      }).addTo(this.map);
    }
  }

  render() {
    return (
      <div id="map" style={style}>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);
