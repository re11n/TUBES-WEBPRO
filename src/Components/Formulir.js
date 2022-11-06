
import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Formulir() {
    const [setDate] = useState();
    return (  
        <>
           <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Kota Keberangkatan" />
        </Col>
        <Col>
          <Form.Control placeholder="Kota Tujuan" />
        </Col>
        <Col>
        <Form.Control placeholder ="Tanggal Berangkat " input type="date" onChange={e => setDate(e.target.value)} />
        </Col>
      </Row>
    </Form>
    <Button variant="light" >Cari Tiket !</Button>
        </>
    );
}

export default Formulir;