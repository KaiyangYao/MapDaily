import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Test from "./Test";
import AllRestaurants from "./Dinning/AllRestaurants";
import EventGallery from "./Events/EventGallery";

function App(props) {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/events" element={<EventGallery className="tabpicker"/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/restaurants" element={<AllRestaurants />}/>
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
