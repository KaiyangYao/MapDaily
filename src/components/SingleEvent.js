import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function SingleEvent( props ) {
  var event = props.event;
  // console.log("!!!" + event);
  return (
    <div>
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{event.location}</Card.Title>
          <Card.Subtitle className="mt-2 text-muted">
            {event.date}
          </Card.Subtitle>
          <Card.Text>
            {event.summary}
          </Card.Text>
          <Card.Link href={event.url}>Event Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEvent;
