import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'
import Plx from 'react-plx';
import Hero from '../components/Hero';

const IndexPage = () => (
  <div>
    <Hero
        title="Major Blazers Glass Blunt"
        text="best reusable blunt for $9.99"
        titleColor="white"
        paragraphColor="white"
        image={require('../images/glassblunt.jpg')}>
    </Hero>
    <div className="Cards">
      <h2>Glass Blunt Features</h2>
      <div className="CardGroup">
        <Plx parallaxData={SlideIn}>
          <Card 
          title="Unique Design"
          text="Stores 1.5 grams and includes a cork-screw twisting memchanism"
          image={require('../images/card1.png')} />
        </Plx>
        <Plx parallaxData={SlideIn}>
          <Card 
          title="Cleaning Kit"
          text="Clean when you want to reuse"
          image={require('../images/card2.png')} />
        </Plx>
        <Plx parallaxData={SlideIn}>
          <Card 
          title="Hassle-Free Use"
          text="Just insert, twist, and light"
          image={require('../images/card3.png')} />
        </Plx>
      </div>
    </div>
    <Plx parallaxData={SlideIn2}>
      <Section
        image={require('../images/packaging.png')}
        title="The Packaging"
      />
    </Plx>
    <SectionCaption>What's Included:</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
        title={cell.title}
        image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SlideIn = [
  {
    start: 'self',
    startOffset: 0,
    duration: 500,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
      { 
        startValue: 30,
        endValue: 0,
        property: "rotate"
      }
    ]
  }
]

const SlideIn2 = [
  {
    start: 'self',
    startOffset: 0,
    duration: 500,
    easing: 'easeInOut',
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      },
    ]
  }
]

