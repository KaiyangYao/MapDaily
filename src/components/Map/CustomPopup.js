import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function CustomPopup(props) {
  const Style = {
    height: 150,
  };

  return (
    <Card className="Card">
      <Box>
        {props.image !== undefined && (
          <CardMedia
            style={Style}
            component="img"
            image={props.image}
            title="Image title"
            className="CardMedia"
          />
        )}
        <CardContent>
          <Typography variant="h6">{props.buildingName}</Typography>
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>

          <Typography variant="h6">Some Useful Links:</Typography>

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

export default CustomPopup;
