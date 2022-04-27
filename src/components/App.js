import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Test from "./Test";
import AllRestaurants2 from "./Dinning/AllRestaurants2";
import EventMain from "./Events/EventMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

function App(props) {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/events" element={<EventMain className="tabpicker"/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/restaurants" element={<AllRestaurants2 />}/>
      </Route>
    </Routes>
  );
}

function Main(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Dashboard />
        </Col>
        <Col className="col_pd">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
