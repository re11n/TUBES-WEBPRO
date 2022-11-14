import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GroupExample() {
  return (
    
    <>
    <Row>
      <Col>
      <Card>
        <Card.Img 
        width={120}
        height={120}
        variant="top" src="https://ugm.ac.id/galleries/crop/14136--730x420px.jpg" />
        <Card.Body>
          <Card.Title>Dieng</Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img 
        width={120}
        height={120}
        variant="top" src="https://ikbis.ac.id/wp-content/uploads/2021/03/Anda-di-Surabaya-Inilah-Pentingnya-Menggunakan-Konsultan-Pajak-Surabaya.jpg" />
        <Card.Body>
          <Card.Title>Surabaya</Card.Title>
          
        </Card.Body>
      </Card>
      </Col><Col>
      <Card>
        <Card.Img 
        width={120}
        height={120}
        variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg/1200px-Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg" />
        <Card.Body>
          <Card.Title>Yogyakarta</Card.Title>
          
        </Card.Body>
      </Card>
      </Col>
      <Col>
    <Card>
    <Card.Img 
    width={120}
    height={120}
    variant="bottom" src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/07/24/1277310948.jpg" />
        <Card.Body>
          <Card.Title>Solo</Card.Title>
        
        </Card.Body>
    </Card>
    </Col>
    </Row>

    
      </>
      
    
   
  );
}

export default GroupExample;