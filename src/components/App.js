import React from "react";
import { Navigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Map from "./Map/Map";
import AllRestaurants from "./Restaurants/AllRestaurants";
import EventMain from "./Events/EventMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

function App(props) {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<EventMain className="tabpicker" />} />
        <Route path="/restaurants" element={<AllRestaurants />} />
      </Route>
    </Routes>
  );
}

function Main(props) {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="main_row">
          <Col className="main_col_left">
            <Map />
          </Col>
          <Col className="main_col_right">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
