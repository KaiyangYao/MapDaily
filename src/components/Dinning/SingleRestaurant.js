import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";

function SingleRestaurant(props) {
//   const unsplash = createApi({
//     accessKey: "miD0I91eKwru8tnuvMoN5hQVlh71Hh5r2WhE9SPKTsQ",
//     fetch: nodeFetch,
//   });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://source.unsplash.com/collection/928423/480x480" />
      <Card.Body>
        <Card.Title>{props.res.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleRestaurant;
