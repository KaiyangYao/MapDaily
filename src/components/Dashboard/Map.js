import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import buildings from "../../resource/json/building";
import { connect } from "react-redux";
import ReactDOMServer from "react-dom/server";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import library from "../../resource/images/Library.jpeg";
import Box from '@mui/material/Box';
import "../../css/map.css"
import Link from '@mui/material/Link';


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

var onEachFeature = function (feature, layer) {
  // All we're doing for now is loading the default style.
  // But stay tuned.
  if(feature.properties.show_on_map){
    layer.bindPopup(ReactDOMServer.renderToString(<CustomReactPopup />));
  }
  layer.setStyle(defaultStyle);
};

function CustomReactPopup () {
  return (
  <Card className= "Card">
    <Box>
    <CardMedia
        component= "img"
        image = {library}
        title="Image title"
        className = "CardMedia"
      />
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          This will be a general description of the library, placeholders for now, more to come!!!
        </Typography>

        <Typography>
      Some Useful Links:
    </Typography> 


    <Grid container spacing={2}> 
    <Grid item>
    <Link href="https://www.macalester.edu/library/" target = "_blank">
        {'Library Website'}
     </Link>
    </Grid>
    <Grid item>
    <Link href="https://www.macalester.edu/library/about/spaces/" target = "_blank">
        {'Rooms'}
     </Link>
    </Grid>   
    {/* <Grid item>
    <Link href="https://www.macalester.edu/library/" target = "_blank">
        {'Library Website'}
     </Link>
    </Grid>   
    <Grid item>
    <Link href="https://www.macalester.edu/library/" target = "_blank">
        {'Library Website'}
     </Link>
    </Grid> */}
     </Grid>


      </CardContent>

    
    </Box>

  </Card>

  );
};

class Map extends React.Component {
  state = {
    buildings: buildings,
  };

  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [44.937 , -93.17],
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

    this.geometries = L.geoJSON(this.state.buildings, {
      onEachFeature: onEachFeature,
      filter: function (feature, layer) {
        return feature.properties.show_on_map;
      },
    }).addTo(this.map);

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
