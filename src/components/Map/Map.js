import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import buildings from "../../resource/json/building";
import { connect } from "react-redux";
import ReactDOMServer from "react-dom/server";
import CustomPopup from "./CustomPopup";
import "../../css/Map/map.css";
import buildingInfo from "../../resource/json/buildingInfo";
import library from "../../resource/images/buildingPics/library.jpg";
import campus_center from "../../resource/images/buildingPics/campus_center.jpg";
import carniegie from "../../resource/images/buildingPics/carniegie.jpg";
import j_wall from "../../resource/images/buildingPics/j_wall.jpg";
import kagin from "../../resource/images/buildingPics/kagin.jpg";
import leonard_center from "../../resource/images/buildingPics/leonard_center.jpg";
import mac_stadium from "../../resource/images/buildingPics/mac_stadium.jpg";
import old_main from "../../resource/images/buildingPics/old_main.jpg";
import olin_rice from "../../resource/images/buildingPics/olin_rice.jpg";
import weyerhaeuser_hall from "../../resource/images/buildingPics/weyerhaeuser_hall.jpg";
import weyerhaeuser_memorial_chapel from "../../resource/images/buildingPics/weyerhaeuser_memorial_chapel.jpg";
import humanity from "../../resource/images/buildingPics/humanity.jpg";
import markim_hall from "../../resource/images/buildingPics/markim_hall.jpg";
import restaurants from "../../resource/json/restaurant";

var buildingName;
var image;
var description;
var websties;

const mapStateToProps = (state) => ({
  buildingsfromRedux: state.buildings,
  restaurantsfromRedux: state.restaurants,
});

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const style = {
  width: "100%",
  height: "650px",
};

var defaultStyle = {
  color: "#2262CC",
  weight: 2,
  opacity: 0.6,
  fillOpacity: 0.1,
  fillColor: "#2262CC",
};

var addResMarker = function (map) {
  if (map.group !== undefined) {
    map.removeLayer(map.group);
  }
  var markerArray = [];
  for (var i = 0; i < restaurants.length; i++) {
    var posit = restaurants[i].coordinate;
    var name = restaurants[i].name;
    markerArray.push(
      L.marker(posit, {
        riseOnHover: true,
      }).bindPopup(name)
    );
  }

  map.group = L.featureGroup(markerArray).addTo(map);
  map.fitBounds(map.group.getBounds());
};

var assignImage = function (buildingName) {
  var image;
  switch (buildingName) {
    case "Olin Rice":
      image = olin_rice;
      return image;

    case "Humanity":
      image = humanity;
      return image;

    case "Janet Wallace Fine Arts Center":
      image = j_wall;
      return image;

    case "Leonard Center":
      image = leonard_center;
      return image;

    case "Old Main":
      image = old_main;
      return image;

    case "Carnegie Hall":
      image = carniegie;
      return image;

    case "Library":
      image = library;
      return image;

    case "Campus Center":
      image = campus_center;
      return image;

    case "Weyerhauser Hall":
      image = weyerhaeuser_hall;
      return image;

    case "Mac Stadium":
      image = mac_stadium;
      return image;

    case "Weyerhauser Chapel":
      image = weyerhaeuser_memorial_chapel;
      return image;

    case "Kagin Commons":
      image = kagin;
      return image;

    case "Markim Hall":
      image = markim_hall;
      return image;

    default:
      return image;
  }
};

var onEachFeature = function (feature, layer) {
  if (feature.properties.show_on_map) {
    layer.bindPopup(
      ReactDOMServer.renderToString(
        <CustomPopup
          image={image}
          description={description}
          buildingName={buildingName}
        />
      )
    );
  }
  layer.setStyle(defaultStyle);
};

class Map extends React.Component {
  state = {
    buildings: buildings,
    restaurants: restaurants,
  };

  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [44.937, -93.17],
      zoom: 16,
      maxZoom: 18,
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
    });

    this.geometries = L.geoJSON(this.state.buildings, {
      onEachFeature: onEachFeature,
      filter: function (feature, layer) {
        return feature.properties.show_on_map;
      },
    }).addTo(this.map);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.buildingsfromRedux !== this.props.buildingsfromRedux) {
      var currentBuildingIndex =
        this.props.buildingsfromRedux.currentBuildingIndex;
      if (currentBuildingIndex !== -1) {
        var position = buildingInfo[currentBuildingIndex].coordinate;
        buildingName = buildingInfo[currentBuildingIndex].name;
        image = assignImage(buildingName);
        description = buildingInfo[currentBuildingIndex].descrip;
        websties = buildingInfo[currentBuildingIndex].roomWeb;
        if (this.map.geometries !== undefined) {
          this.map.removeLayer(this.map.geometries);
        }
        this.map.geometries = L.geoJSON(this.props.buildingsfromRedux, {
          onEachFeature: onEachFeature,
          filter: function (feature, layer) {
            return feature.properties.show_on_map;
          },
        }).addTo(this.map);
        this.map.setZoom(16);
        this.map.flyTo(L.latLng(position[0] + 0.0028, position[1]), 16);
        this.map.popup = L.popup()
          .setLatLng(position)
          .setContent(
            ReactDOMServer.renderToString(
              <CustomPopup
                image={image}
                description={description}
                buildingName={buildingName}
                websites = {websties}
              />
            )
          )
          .openOn(this.map);
      } else if (this.map.geometries !== undefined) {
        this.map.removeLayer(this.map.geometries);
        this.map.removeLayer(this.map.popup);
        addResMarker(this.map);
      } else {
        this.map.flyTo([44.9362, -93.17]);
        addResMarker(this.map);
      }
    }
    if (prevProps.restaurantsfromRedux !== this.props.restaurantsfromRedux) {
      var index = this.props.restaurantsfromRedux.currentBuildingIndex;
      if (index === -1) {
        if (this.map.group !== undefined) {
          this.map.removeLayer(this.map.group);
        }
        if (this.map.restpopup !== undefined) {
          this.map.removeLayer(this.map.restpopup);
        }

        this.map.flyTo([44.937, -93.17], 16);
      } else {
        var restposit = this.props.restaurantsfromRedux[index].coordinate;
        var restName = this.props.restaurantsfromRedux[index].name;
        this.map.restpopup = L.popup()
          .setLatLng(restposit)
          .setContent(restName)
          .openOn(this.map);
        this.map.flyTo(restposit, 18);
      }
    }
  }

  render() {
    return <div id="map" style={style}></div>;
  }
}

export default connect(mapStateToProps)(Map);
