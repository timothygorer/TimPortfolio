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
        image={require('../images/iphonex.png')} />
  </div>
)

export default SecondPage
