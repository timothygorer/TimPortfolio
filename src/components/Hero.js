import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const HeroMain = styled.div`
    background-image: url(${props => props.image});
    height: 920px;
    background-size: cover;
    background-position: center;
    position: relative;

    h1 {
        margin: 0;
        color: ${props => props.titleColor};
        font-size: 80px;
        line-height: 1.2;
        opacity: 0;
        animation: HeroAnimation;
        animation-duration: 3s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

        @media (max-width: 640px) {
            font-size: 40px;
        }
    }

    a {
        font-size: 17px;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.7);
        padding: 9px 20px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 20px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    a:hover {
        background: white;
        color: black;
    }

    p {
        color: ${props => props.paragraphColor};
        font-size: 30px;
        line-height: 1.5;
        animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
        opacity: 0;

        @media (max-width: 640px) {
            font-size: 24px;
        }
    }

    svg {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .Logos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 40px;
        margin: 100px 0;
        justify-items: center;
    }

    @media (max-width: 667px) {
        height: 400px;
        width: 667px;

        .Logos {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
`
  
const HeroGroup = styled.div`
    max-width: 500px;
    margin: 0 auto 0 auto;
    padding: 300px 100px;
    text-align: center;

    @media (max-width: 640px) {
        padding: 100px 20px;
    }
`

const Hero = props => (
    <HeroMain image={props.image} titleColor={props.titleColor} paragraphColor={props.paragraphColor}>
        <HeroGroup>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </HeroGroup>
        <Wave />
    </HeroMain>
)

export default Hero