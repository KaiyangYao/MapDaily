import { Card, Button } from "react-bootstrap";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeBuildings } from "../../features/buildingsSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Events/SingleEvent.css"

function SingleEvent(props) {
  var event = props.event;
  const dispatch = useDispatch();
  var buildings = [
    "olin rice",
    "humanity",
    "janet wallace fine art center",
    "leonard center",
    "old main",
    "carnegie",
    "library",
    "campus center",
    "weyerhauser hall",
    "mac stadium",
    "weyerhauser chapel",
    "kagin",
  ];
  const findIndex = () =>{
    var location = event.location.toLowerCase();
    var index = undefined;
    for (let i = 0; i < buildings.length; i++) {
      if(location.includes("kagin commons".toLowerCase())){
        if(location.includes("ballroom")){
          index = 8
          return index;
        }
        else{
          index = 11;
          return index;
        }
      }
      if (buildings[i].length > location.length) {
        if (buildings[i].includes(location.toLowerCase())) {
          index = i;
        }
        else{
          continue;
        }
      } else if (location.includes(buildings[i])){
          index = i;
      }
    }
    if (location.includes("weyerhaeuser")) {
      if (location.includes("hall")) {
        index = 8;
      }
      if (location.includes("chapel")) {
        index = 10;
      }
    }
    if (location.includes("music")||location.includes("art")||location.includes("theater")) {
      index = 2;
    }
    if (location.includes("macalester")&&location.includes("complex")) {
      index = 3;
    }
    if(location.includes("John B. Davis".toLowerCase())){
      index = 7;
    }
    if(location.includes("olin-rice")){
      index = 0;
    }
    if(location.includes("humanities")){
      index = 1;
    }
    if(location.includes("macalester stadium")){
      index = 9;
    }
    return index;
  }
  const index = findIndex();

  const handleOnClick = () => {
    dispatch(changeBuildings(index));
  };

  return (
    <div>
      <Card border="info" style={{ width: "15rem" }} className="mb-3 cust_event_card">
        <Card.Body>
          <Card.Title>{event.summary}</Card.Title>
          <Card.Subtitle className="mt-2 text-muted">
            {event.date}
          </Card.Subtitle>
          <Card.Text>{event.location}</Card.Text>

          <Stack direction="row" spacing={2} justifyContent="space-between">
            <a href={event.url} class="card-link" target="_blank">
              Event Link
            </a>
            {index!=undefined && (
              <Button variant="primary" size="sm" onClick={handleOnClick}>
                Show On Map{" "}
              </Button>
            )}
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
