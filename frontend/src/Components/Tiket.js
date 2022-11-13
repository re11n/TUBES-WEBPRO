import React, { Component } from 'react'
import Formulir from './Formulir';
import Card from 'react-bootstrap/Card';

export default class Tiket extends Component {
    render() {
        return (
            <div>
                <Formulir/>
                <Card body>Berikut adalah tiket yang tersedia:</Card>
            </div>
        )
    }
}