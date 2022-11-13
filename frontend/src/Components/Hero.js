import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Nav } from 'react-bootstrap';
import About from './Aboutus';
import CS from './CS';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function AutoLayoutExample() {
  return (
    <Router>
    <Container>
    <Row>
        <Col>
        <Figure>
        <Image 
            width={100}
            height={70}
            src='https://s1.rdbuz.com/web/images/home/promise.png' className='img-fluid shadow-4' ></Image>
        <Figure.Caption>
            <h4>Kelebihan layanan kami</h4>
        </Figure.Caption>
        </Figure>
        </Col>

    </Row>
      <Row>
        <Col>   
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/app.png"
      />
      <Figure.Caption>
      <h1>Fleksibel</h1>
      <h5>Sekarang pesan tiket bisa kapanpun dan dimanapun.</h5>
      </Figure.Caption>
    </Figure>
    </Col>

    <Col>
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/cloud.png"/>
      <Figure.Caption>
      <h1>Informatif</h1>
      <h5>Anda dapat melihat informasi tentang armada dan tiket anda.</h5>
      </Figure.Caption>
    </Figure>
        </Col>

    <Col>
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/ux.png"
      />
      <Figure.Caption>
      <h1>Praktis</h1>
      <h5>Anda tidak perlu repot cukup klik saja.</h5>
      </Figure.Caption>
     </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
        <Figure>
            <Image 
            width={150}
            height={200}
            src='https://www.newshantika.co.id/assets/img/smartmockups_kt2px5sw.png' className='img-fluid shadow-4' ></Image>
        <Figure.Caption>
            <h1>Download Apikasi Mobile Kami Sekarang!</h1>
        </Figure.Caption>
        </Figure>
        </Col>
      </Row> 
      <Row>
        <Col>
        <Figure>
        <Figure.Caption>
            <h1>About Us!</h1>
            <h7>PO. New Shantika didirikan pada bulan Maret 2003. Garasi utama New Shantika berada di Ngabul, Kabupaten Jepara, Provinsi Jawa Tengah. New Shantika melayani beberapa rute perjalanan seperti Jepara-Jakarta dengan armada yang menyediakan fasilitas lengkap demi menjaga kenyamanan penumpang saat melakukan perjalanan.</h7>
            
        </Figure.Caption>
        
        </Figure>
        <Nav.Link as={Link} to="/aboutus"><Button variant="primary" >Cari Tahu lebih lanjut !</Button></Nav.Link>
        </Col>
        <Col>
      <Figure>
      <Image 
            
            src='https://www.newshantika.co.id/assets/img/ic-new-shantika_ilustrasi-bus-shantika.png' className='img-fluid shadow-4' ></Image>
        </Figure>
        </Col>
      </Row>

      <Row>
       <Col>
       
        <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        </Col>

        <Col>
        <Figure>
        <Image 
             width={150}
             height={200}
            src= 'https://i1.wp.com/intraoralscanners.com/wp-content/uploads/2018/06/faq_icon_pic.png' className='img-fluid shadow-4' ></Image>
          <Figure.Caption>
        <h4>FAQ</h4>
        </Figure.Caption>
        </Figure>
        </Col>
      </Row>

      <Row>
        <Figure>
          <Figure.Caption>
          <h3> Masih Ada Pertanyaan Yang belum Terjawab?</h3>
          </Figure.Caption>
          <Nav.Link as={Link} to="/CS"><Button variant="primary" >Tanyakan Pada CS</Button></Nav.Link>
        </Figure>
        
      </Row>
    </Container>
    
    <div>
      <Switch>
        <Route path="/aboutus">
          <About/>
        </Route>
        <Route path="/CS">
          <CS/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default AutoLayoutExample;