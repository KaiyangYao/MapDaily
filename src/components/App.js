import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import TabPicker from "./TabPicker";
import Test from "./Test";

function App(props) {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/events" element={<TabPicker className="tabpicker"/>} />
        <Route path="/Test" element={<Test />} />
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
