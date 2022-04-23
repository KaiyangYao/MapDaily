import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";
import r1 from "../../resource/images/r1.jpg";
import r2 from "../../resource/images/r2.jpg";
import r3 from "../../resource/images/r3.jpg";
import r4 from "../../resource/images/r4.jpg";
import r5 from "../../resource/images/r5.jpg";

function SingleRestaurant(props) {
  //   const unsplash = createApi({
  //     accessKey: "miD0I91eKwru8tnuvMoN5hQVlh71Hh5r2WhE9SPKTsQ",
  //     fetch: nodeFetch,
  //   });
  var imgList = [r1, r2, r3, r4, r5];
  var res = props.res;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgList[res.id - 1]} />
      <Card.Body>
        <Card.Title>{res.name}</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          temporibus ipsa error deserunt debitis? Ipsa fugiat qui facilis ullam,
          delectus eveniet aliquam earum amet quidem velit cumque placeat
          tempore quibusdam.
        </Card.Text>
        <Button variant="info" className="mr-3">
          Show On Map
        </Button>
        <Button variant="warning">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleRestaurant;
