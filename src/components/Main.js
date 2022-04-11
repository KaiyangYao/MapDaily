import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard";
import AllEvents from "./AllEvents";
import DateSelector from "./DateSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const changeDateHandler = (event) => {
      console.log(event);
      this.setState({
        date: new Date(event),
      });
    };

    return (
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <Dashboard />
          </Col>

          <Col>
            <Row className="mt-5">
              <div>
                <DateSelector onChangeDate={changeDateHandler} />
              </div>
            </Row>
            <AllEvents date={this.state.date} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
