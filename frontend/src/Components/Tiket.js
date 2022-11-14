import React, { Component } from 'react'
import Formulir from './Formulir';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

function Tiket(){
        const tiket={
            padding:'60px'
        }
        return (

            <div className='FormTiket' style={tiket}>
                <Formulir/>
                <Card className='tiket'>
                    <Card.Body>Berikut adalah tiket yang tersedia:</Card.Body>
                </Card>

                <Card className='tiket'>
            <Card.Header  as="h5">Bandung - Jakarta</Card.Header>
            <Card.Body>
                <Card.Title>Keberangkatan pukul : 06.00</Card.Title>
                <Card.Text>
                Tersisa 8 Kursi
                </Card.Text>
            </Card.Body>
            <Button variant="dark">Pilih</Button>
            </Card>

                <Card className='tiket'>
            <Card.Header  as="h5">Bandung - Jakarta</Card.Header>
            <Card.Body>
                <Card.Title>Keberangkatan pukul : 09.00</Card.Title>
                <Card.Text>
                Tersisa 12 Kursi
                </Card.Text>
            </Card.Body>
            <Button variant="dark">Pilih</Button>
            </Card>

            <Card className='tiket'>
            <Card.Header  as="h5">Bandung - Jakarta</Card.Header>
            <Card.Body>
                <Card.Title>Keberangkatan pukul : 12.00</Card.Title>
                <Card.Text>
                Tersisa 2 Kursi
                </Card.Text>
            </Card.Body>
            <Button variant="dark">Pilih</Button>
            </Card>
            <Footer/>
            </div>            
        )
}


export default Tiket