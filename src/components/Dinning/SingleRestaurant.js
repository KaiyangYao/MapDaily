import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";
import r1 from "../../resource/images/r1.jpg";
import r2 from "../../resource/images/r2.jpg";
import r3 from "../../resource/images/r3.jpg";
import r4 from "../../resource/images/r4.jpg";
import r5 from "../../resource/images/r5.jpg";
import "../../css/SingleRestaurant.scss";

function SingleRestaurant(props) {
  //   const unsplash = createApi({
  //     accessKey: "miD0I91eKwru8tnuvMoN5hQVlh71Hh5r2WhE9SPKTsQ",
  //     fetch: nodeFetch,
  //   });
  var imgList = [r1, r2, r3, r4, r5];
  var res = props.res;

  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={imgList[res.id - 1]} />
    //   <Card.Body>
    //     <Card.Title>{res.name}</Card.Title>
    //     <Card.Text>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
    //       temporibus ipsa error deserunt debitis? Ipsa fugiat qui facilis ullam,
    //       delectus eveniet aliquam earum amet quidem velit cumque placeat
    //       tempore quibusdam.
    //     </Card.Text>
    //     <Button variant="info" className="mr-3">
    //       Show On Map
    //     </Button>
    //     <Button variant="warning">Details</Button>
    //   </Card.Body>
    // <li class="rest_card">
    //   <img
    //     src="https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
    //     alt=""
    //   />
    //   <h3>
    //     <a href="">A Super Wonderful Headline</a>
    //   </h3>
    //   <p>Lorem ipsum sit dolor amit</p>
    // </li>

    <div class="page-content">
      <div class="rest_card">
        <div class="rest_content">
          <h2 class="rest_title">Mountain View</h2>
          <p class="rest_copy">
            Check out all of these gorgeous mountain trips with beautiful views
            of, you guessed it, the mountains
          </p>
          <button class="btn">View Trips</button>
        </div>
      </div>
    </div>
  );
}

export default SingleRestaurant;
