import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import buildings from "../../resource/json/building";
import { connect } from "react-redux";
import ReactDOMServer from "react-dom/server";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import "../../css/Map/map.css";
import Link from "@mui/material/Link";
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
import humanity from "../../resource/images/buildingPics/humanity.jpg"
import markim_hall from "../../resource/images/buildingPics/markim_hall.jpg"

var buildingName
var image 
var description


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
  height: "650px",
};

var defaultStyle = {
  color: "#2262CC",
  weight: 2,
  opacity: 0.6,
  fillOpacity: 0.1,
  fillColor: "#2262CC",
};

var assignImage = function(buildingName){
  var image
  switch(buildingName){
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
      image = weyerhaeuser_hall
      return image;

    case "Mac Stadium":
      image = mac_stadium;
      return image;

    case "Weyerhauser Chapel":
      image = weyerhaeuser_memorial_chapel;
      return image;

    case "Kagin Commons":
      image = kagin
      return image;
    case "Markim Hall":
      image = markim_hall
      return image
  }

}

var onEachFeature = function (feature, layer) {
  // All we're doing for now is loading the default style.
  // But stay tuned.
  if (feature.properties.show_on_map) {
    layer.bindPopup(ReactDOMServer.renderToString(<CustomReactPopup image={image} description = {description} buildingName = {buildingName}/>));
  }
  layer.setStyle(defaultStyle);
};

function CustomReactPopup(props) {
  const Style = {
    height: 150,
  };
  
  return (
    <Card className="Card">
      <Box>
       {props.image != undefined && <CardMedia
          style = {Style}
          component="img"
          image={props.image}
          title="Image title"
          className="CardMedia"
        />}
        <CardContent>
          <Typography variant="h6" >
            {props.buildingName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>

          <Typography variant = "h6">Some Useful Links:</Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Link href="https://www.macalester.edu/library/" target="_blank">
                {"Library Website"}
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.macalester.edu/library/about/spaces/"
                target="_blank"
              >
                {"Rooms"}
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
}

class Map extends React.Component {
  state = {
    buildings: buildings,
    changedBuilding: ""
  };

  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [44.937, -93.17],
      zoom: 17,
      maxZoom: 17,
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
    var position = buildingInfo[this.props.buildingsfromRedux.currentBuildingIndex].coordinate;
    buildingName = buildingInfo[this.props.buildingsfromRedux.currentBuildingIndex].name
    image = assignImage(buildingName)
    description = buildingInfo[this.props.buildingsfromRedux.currentBuildingIndex].descrip;

    position[0] = position[0]+0.0015;

    if (prevProps.buildingsfromRedux != this.props.buildingsfromRedux) {
      this.map.removeLayer(this.geometries);
      this.geometries = L.geoJSON(this.props.buildingsfromRedux, {
        onEachFeature: onEachFeature,
        filter: function (feature, layer) {
          return feature.properties.show_on_map;
        },
      }).addTo(this.map);
    }


    this.map.flyTo(position);

    position[0] = position[0]-0.0015;
    this.map.popup = L.popup()
    .setLatLng(position)
    .setContent(ReactDOMServer.renderToString(<CustomReactPopup image={image} description = {description} buildingName = {buildingName}/>))
    .openOn(this.map);
  }

  render() {
    return <div id="map" style={style}></div>;
  }
}

export default connect(mapStateToProps)(Map);
