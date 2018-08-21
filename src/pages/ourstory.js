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

const SecondPage = () => (
  <div>
    <Hero
        title="Our Story"
        titleColor="black"
        paragraphColor="black"
        image={require('../images/ourstory.jpg')} />
    <Plx parallaxData={SlideIn2}>
      <Section
        image={require('../images/packaging.png')}
        title="The Packaging"
        text="It all started with the idea that smoking should be simple and feel luxurious."
      />
    </Plx>
  </div>
)

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

export default SecondPage
