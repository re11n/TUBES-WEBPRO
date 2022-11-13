import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormJadwal() {
    const [setDate] = useState();
    return (  
        <>
           <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Kota Asal/Tujuan" />
        </Col>
        <Col>
          <Form.Control placeholder="Jam Keberangkatan/Tiba" />
        </Col>
        <Col>
        <Form.Control placeholder ="Tanggal Keberangkatan/Tiba " input type="date" onChange={e => setDate(e.target.value)} />
        </Col>
      </Row>
    </Form>
    <Button variant="light" >Lihat Jadwal</Button>
        </>
    );
}

export default FormJadwal;