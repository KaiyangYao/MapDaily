import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack} from "@mui/material";
import {useDispatch} from 'react-redux';
import {changeBuildings} from "../../features/buildingsSlice";


function SingleEvent(props) {
  var event = props.event;
  const dispatch = useDispatch();
  var buildings =list["olin rice", "humanity", "janet wallace fine art center", "leonard center",
"old main", "carnegie", "library", "campus center", "weyerhauser hall", "mac stadium", 
"weyerhauser chapel", "kagin"]
  const handleOnClick = () =>{
    var location = event.location
    var index = 0
    for (let i = 0; i < buildings.length; i++){
      if (buildings[i].length > location.length){
        if (buildings[i].toLowercase().includes(location)){
          index = i
        }
      }
      else{
        if (location.includes(buildings[i].toLowercase())){
          index = i
        }
      }
    }
    if (location.includes("weyerhauser")){
      if (location.includes("hall")){
        index = 8
      }
      if (location.includes("chapel")){
        index = 10
      }
    }
    dispatch(changeBuildings(index));
  }

  return (
    <div>
      {/* 18 */}
      <Card border="info" style={{ width: "15rem" }} className="mb-3">
        <Card.Body>
          <Card.Title>{event.summary}</Card.Title>
          <Card.Subtitle className="mt-2 text-muted">
            {event.date}
          </Card.Subtitle>
          <Card.Text>{event.location}</Card.Text>

          <Stack direction="row" spacing={2}   justifyContent="space-between">

          <a href= {event.url} class="card-link" target = "_blank">Card link</a>
          <Button variant="primary" size = 'sm' onClick = {handleOnClick }>Show On Map </Button>

          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
