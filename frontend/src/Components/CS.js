
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import { Card, Nav } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Jawaban</Popover.Header>
    <Popover.Body>
      ini adalah jawaban dari pertanyaan
    </Popover.Body>
  </Popover>
);



function CS() {
  return (
    <div className='bantuan'>
      <Row>
      <Col>
        <Figure>
        <Image 
             width={300}
             height={400}
            src= 'https://i1.wp.com/intraoralscanners.com/wp-content/uploads/2018/06/faq_icon_pic.png' className='img-fluid shadow-4' ></Image>
          <Figure.Caption>
        <h4>FAQ</h4>
        <Nav.Link as={Link} to="/CS">FAQ</Nav.Link>
        </Figure.Caption>
        </Figure>
        </Col>
        <Col>
        <ListGroup variant="flush" className='tabelbantuan'>
      <ListGroup.Item>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="light">Apakah saya bisa mendapat refund</Button>
  </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item><OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="light">Apakah Waktu selalu tepat</Button>
  </OverlayTrigger></ListGroup.Item>
      <ListGroup.Item>
      <ListGroup.Item><OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="light">Selama perjalan ada berapa kali istirahat</Button>
  </OverlayTrigger></ListGroup.Item>

      </ListGroup.Item>
      <ListGroup.Item> <ListGroup.Item><OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="light">Apakah boleh merokok didalam bis</Button>
  </OverlayTrigger></ListGroup.Item></ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>
      <h1> Masih ada pertanyaan yang belum terjawab?</h1>
      <h4>Silahkan isi formulir dibawah ini</h4>
      <Card>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Form>

  <Form className='formcs'>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Pertanyaan</Form.Label>
        <Form.Control type="text" placeholder="Masukkan pertanyaan Anda" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>   

    </div>
  )
}

export default CS
