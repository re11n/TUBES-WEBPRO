import { Nav } from 'react-bootstrap';
import { 
    // eslint-disable-next-line
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tiket from './Tiket';

function Formulir() {
    const [setDate] = useState();
    return (  
        <>
           <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Kota Keberangkatan/Tiba" />
        </Col>
        <Col>
          <Form.Control placeholder="Kota Tujuan/Tiba" />
        </Col>
        <Col>
        <Form.Control placeholder ="Tanggal Berangkat " input type="date" onChange={e => setDate(e.target.value)} />
        </Col>
      </Row>
    </Form>
    <Nav.Link as={Link} to="/Tiket"><Button variant="primary" >Lihat Jadwal</Button></Nav.Link>
    <div>
        <Router>
      <Switch>
        <Route path="/Tiket">
          <Tiket/>
        </Route>
        <Route path="/Tiket">
          <Tiket/>
        </Route>
      </Switch>
      </Router>
    </div>
   
        </>
    
    );
}

export default Formulir;