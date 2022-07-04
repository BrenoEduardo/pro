import React, { Component } from 'react';
import Carousel_generico from './Carousel_generico';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Carousel_completo extends Component {
    render() {
        return (
            <div class="col-7">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} 
                stopOnHover={true} showArrows={true} transitionTime={1500}>
                <div class="item">
                    <Carousel_generico id="0"/>
                    <ul class='texto-carrosel'>
                        <h5>Discos</h5>
                        <li>Corte</li>
                        <li>Flap</li>
                        <li>Desbaste</li>
                        <p></p>
                        <h5>Dobradiças</h5>
                        <li>Comum</li>
                        <li>Soft</li>
                        <li>Closing</li>
                    </ul>
                </div>
                <div class="item">
                    <Carousel_generico id="1"/>
                    <ul class='texto-carrosel'>
                        <h5>Parafusos</h5>
                        <li>Brocantes</li>
                        <li>Chipboard</li>
                        <li>Autoatarrantes</li>
                        <li>Ponta guia</li>
                        <li>Inox</li>
                    </ul>
                </div>
                <div class="item">
                    <Carousel_generico id="2"/>
                    <ul class='texto-carrosel'>
                        <h5>Fitas</h5>
                        <li>Isolante</li>
                        <li>Crepe</li>
                        <li>Dupla face</li>
                        <li>Embalagem</li>
                        <li>Quadro</li>
                        <li>Borda pvc branca</li>
                    </ul>
                </div>
                <div class="item">
                    <Carousel_generico id="3"/>
                    <ul class='texto-carrosel'>
                        <h5>Colas</h5>
                        <li>Contato</li>
                        <li>PVA</li>
                        <li>Bonder</li>
                        <li>Hot Melt</li>
                        <p></p>
                        <h5>Corrediças</h5>
                        <li>Light</li>
                        <li>Normal</li>
                        <li>Soft closing</li>
                        <li>Invisíveis</li>
                    </ul>
                </div>
                </Carousel>
            </div>
        );
    }
}

export default Carousel_completo;