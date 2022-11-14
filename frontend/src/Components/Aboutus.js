import React from 'react'
import Card from 'react-bootstrap/Card';

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

    
    </div>
  )
}

export default Aboutus