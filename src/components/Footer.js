import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: $486791
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: ;
    font-size: 24px;
    justify-self: center;
    transition:  0.8s cubic-bezier(0.7, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transform: trandlateY(-3px);
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    jusitfy-items: center;
    padding: 0 50px;
    box-sizing: border-box;

    a {
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`
const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Tweet "Check out this awesome glass blunt by Major Blazers. It only costs $9.99."</Text>
        <Button>Tweet</Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer