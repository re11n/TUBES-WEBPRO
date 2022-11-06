import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';


function AutoLayoutExample() {
  return (
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
    </Container>
  );
}

export default AutoLayoutExample;