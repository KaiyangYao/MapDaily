import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack} from "@mui/material";
import {useDispatch} from 'react-redux';
import {changeBuildings} from "../features/buildingsSlice"



function SingleEvent(props) {
  var event = props.event;
  const dispatch = useDispatch();

  const handleOnClick = () =>{
    dispatch(changeBuildings(0));
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

          <Card.Link href={event.url}>Event Link</Card.Link>
          <Button variant="primary" size = 'sm' onClick = {handleOnClick }>Show On Map </Button>

          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
