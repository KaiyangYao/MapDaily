import { Container, Row, Col } from "react-bootstrap";
import {Outlet, Route, Routes} from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Main.css";
import  EventGallery from "./Events/EventGallery";
import Test from "./Test";


function App(props){
  return(
    <Routes>
      <Route element={<Main/>}> 
      <Route path='/events' element={
          <EventGallery />
        }/>
      <Route path='/Test' element={
          <Test />
        }/>
      </Route>
    </Routes>
  )
}

function Main(props) {

    return (
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <Dashboard />
          </Col>
          <Col>
              <Outlet/>
          </Col>
        </Row>
      </Container>
    );
}

export default App;
