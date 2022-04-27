import { Component } from "react";
import { Row } from "react-bootstrap";
import DateSelector from "./DateSelector";
import AllEvents from "./AllEvents";


class EventMain extends Component{
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
      }

    render(){
        const changeDateHandler = (event) => {
            this.setState({
              date: new Date(event),
            });
        };

        return (
        <div>
            <Row className="mt-5">
                <div>
                  <DateSelector onChangeDate={changeDateHandler} />
                </div>
            </Row>
          <AllEvents date={this.state.date} />
          </div>
        )
    }
}

export default EventMain;