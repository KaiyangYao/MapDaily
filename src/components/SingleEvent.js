import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack} from "@mui/material";



function SingleEvent(props) {
  var event = props.event;
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

          <Stack direction="row" spacing={3}   justifyContent="space-between">

          <Card.Link href={event.url}>Event Link</Card.Link>
          <Button variant="primary" size = 'sm'>Show On Map</Button>

          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
