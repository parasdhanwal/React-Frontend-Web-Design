import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/image.jpeg';

const Styles = styled.div`
.jumbo{
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    position:relative;
    height: 200px;
    z-index: -2;
    }
.overlay{
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}    
    `;

export const JumbotronHome = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
        <Container>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
        </Jumbo>
    </Styles>
)
