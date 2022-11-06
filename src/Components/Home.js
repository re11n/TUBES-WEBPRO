import React, { Component } from 'react'
import Slider from './Slider';
import Card from './Card';
import Formulir from './Formulir';
import Hero from './Hero';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
        <div>
            <Slider/>
            <p>Mau Pergi Kemana?</p>
            <Formulir/>
            <p>Berikut adalah trayek andalan kami</p>
            <Card/>
            <Hero/>
            <Footer/>
        </div>
        )
    }
}
