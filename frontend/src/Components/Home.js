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
            <Formulir/>
            <h3>Berikut adalah trayek andalan kami</h3>
            <Card/>
            <Hero/>
            <Footer/>
        </div>
        )
    }
}
