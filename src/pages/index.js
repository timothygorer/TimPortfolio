import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'
import Plx from 'react-plx';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>My name is< br/>Timothy Gorer</h1>
        <p>I am an iOS development intern at Fanatics. Today I will talk about my summer accomplishments.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')}
          width="50" />
          <img src={require('../images/logo-figma.png')}
          width="50" />
          <img src={require('../images/logo-studio.png')}
          width="50" />
          <img src={require('../images/logo-framer.png')}
          width="50" />
          <img src={require('../images/logo-react.png')}
          width="50" />
          <img src={require('../images/logo-swift.png')}
          width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
      <Plx parallaxData={SlideIn}>
        <Card 
        title="Design System"
        text="10 sections"
        image={require('../images/wallpaper.jpg')} />
      </Plx>
      <Plx parallaxData={SlideIn}>
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require('../images/wallpaper2.jpg')} />
      </Plx>
        <Card 
        title="Sound Design"
        text="5 sections"
        image={require('../images/wallpaper3.jpg')} />
        <Card 
        title="ARKit 2"
        text="10 sections"
        image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    <Plx parallaxData={SlideIn2}>
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/iphone2.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
    </Plx>
    <SectionCaption>12 sections - 6 hours</SectionCaption>
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

