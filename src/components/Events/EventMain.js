import { Component } from "react";
import { Row } from "react-bootstrap";
import DateSelector from "./DateSelector";
import AllEvents from "./AllEvents";

class EventMain extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const changeDateHandler = (date) => {
      this.setState({
        date: new Date(date),
      });
    };

    return (
      <div>
        <Row>
          <div>
            <DateSelector onChangeDate={changeDateHandler} />
          </div>
        </Row>
        <AllEvents date={this.state.date} />
      </div>
    );
  }
}

export default EventMain;
