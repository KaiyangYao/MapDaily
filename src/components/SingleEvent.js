import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleEvent(props) {
  var event = props.event;
  // console.log("!!!" + event);
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
          <Card.Link href={event.url}>Event Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
