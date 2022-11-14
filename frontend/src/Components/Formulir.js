import React,{useState} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


function Formulir() {
    const [setDate] = useState();
    return (  
        <>
         <Card className="text-center">
      <Card.Body>
        <Card.Title>Mau pergi kemana?</Card.Title>
        <Card.Text>
        <Form>
      <Row>
        <Col>
        <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Kota Berangkat
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
        <Col>
        <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Kota Tujuan
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Col>
        <Col>
        <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Jumlah Penumpang
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Col>
        <Col>
        <Form.Control placeholder ="Tanggal Berangkat " input type="date" onChange={e => setDate(e.target.value)} />
        </Col>
      </Row>
    </Form>
        </Card.Text>
        <Button variant="primary">Cari Tiket!</Button>
      </Card.Body>
    </Card>
          
        </>
    );
}

export default Formulir;