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
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';




function Formulir() {
    const [setDate] = useState();
    return (  
        <>
        <Card>
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
    </Card>

    <Card>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Card>
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