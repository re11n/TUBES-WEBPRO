import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';


function Aboutus() {
  return (
    <div className='AboutUs'>
      <Card className="bg-dark text-black">
      <Card.Img 
      width={1860}
      height={500}
      src="https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2018/1860x1050-Volvo-9900-Landscape-2018.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
        PO. New Shantika didirikan pada bulan Maret 2003. Garasi utama New Shantika berada di Ngabul, Kabupaten Jepara, Provinsi Jawa Tengah. New Shantika melayani beberapa rute perjalanan seperti Jepara-Jakarta dengan armada yang menyediakan fasilitas lengkap demi menjaga kenyamanan penumpang saat melakukan perjalanan.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
    <h1>Berikut adalah profil anggota AIMBOT</h1>
    <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src="https://media.suara.com/pictures/653x366/2020/12/30/22941-januarisman-atau-aris-idol-suaracomalfian-winanto.jpg" />
      <Card.Body>
        <Card.Title>Ahmad Rizky</Card.Title>
        <Card.Text>
          dipanggil aris keturunan china orangnya baik
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://media.tenor.com/ifbTCS5-fHoAAAAd/jokowi-kaget.gif' />
      <Card.Body>
        <Card.Title>Lutpantek</Card.Title>
        <Card.Text>
          bercita-cita menjadi presiden indoensia
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://img.idxchannel.com/media/700/images/idx/2022/06/22/Penghasilan_David_GadgetIn_dari_YouTube__1_.jpg' />
      <Card.Body>
        <Card.Title>Ryan David</Card.Title>
        <Card.Text>
          halo ghays david disini dan ini adalah web kami
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
<Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2022/07/fakta-sosuke-aizen-featured-640x360.jpg' />
      <Card.Body>
        <Card.Title>Alfarizqi</Card.Title>
        <Card.Text>
          apakah beliau ini benar benar beliau
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
    </Row>
    <Row>
      <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://cdn.myanimelist.net/r/275x308/images/clubs/10/348984.jpg?s=a0df53e92ed505cd6156d837e37b237e' />
      <Card.Body>
        <Card.Title>Rapip</Card.Title>
        <Card.Text>
          beliau menyukai anak anak dibawah umur
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
     <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://awsimages.detik.net.id/community/media/visual/2021/02/04/wakil-presiden-maruf-amin_43.jpeg?w=700&q=90' />
      <Card.Body>
        <Card.Title>Fajar</Card.Title>
        <Card.Text>
          diam tak bergerak bergerak tak diam
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
     <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img 
      width={120}
      height={120}
      variant="top" src='https://storage.nu.or.id/storage/post/16_9/big/preemptive-solutions_1663814694.webp' />
      <Card.Body>
        <Card.Title>daws</Card.Title>
        <Card.Text>
          awikwiakwiaksiawksiawkiasiwk
          </Card.Text>
     </Card.Body>
     </Card>
     </Col>
    </Row>
    
    <Footer/>
      </div>
      
    
   
    
  )
}

export default Aboutus