import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Map from "./Map";
import logo from "../../resource/images/logo_white.svg";
import { useNavigate } from "react-router-dom";
import "../../css/NavBar/Dashboard.css";

const styles = (theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    background : '#01426a',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto",
  },
  toolbarTitle: {
    flex: 1,
  },
  chartContainer: {
    marginLeft: -30,
  }
});

function Dashboard(props) {
  const { classes } = props;
  const navigate = useNavigate();
  function navigateToRestaurants() {
    navigate("/restaurants");
  }
  function navigateToEvents() {
    navigate("/events");
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <img src={logo} style={{ heigh: 170, width: 150 }} alt="logo" />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <Button onClick={navigateToEvents} className="nav_button">Events</Button>
          <Button onClick={navigateToRestaurants} className="nav_button"> Restaurants</Button>
          <Button className="nav_button">Study</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Typography component="div" className={classes.chartContainer}>
          <Map />
        </Typography>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
