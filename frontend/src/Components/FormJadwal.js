
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
    <Button variant="primary" >Lihat Jadwal</Button>
        </>
    );
}

export default Formulir;