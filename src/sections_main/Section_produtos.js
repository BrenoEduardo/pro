import React, { Component } from 'react';
import Carousel_completo from './carousel/Carousel_completo';

export default class Section_produtos extends Component {
    render() {
        return (
            <div class="fundo_produtos">
                <div class="container py-sm-1 py-md-3 py-lg-5">
                    <div class="row justify-content-center align-items-center py-3">
                        <h1>NOSSOS PRODUTOS</h1>
                        <h2>(TEMOS UMA VARIEDADE GRANDE DE OUTROS PRODUTOS)</h2>
                        <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-lg-10 myt">
                            <Carousel_completo/>
                        </div>
                    </div>
                    <p class="pprodut">Caso ficou interessado em algum produto, ou queira ver o nosso catalogo completo com mais de 70 produtos de diversos segmentos, 
                    entre em contato conosco através do Whatszap ou pelo formulário <a href="#formulario">abaixo</a></p>
                </div>
            </div>
        );
    }
}