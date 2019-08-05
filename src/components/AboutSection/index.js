import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import { Column, Row, ResponsiveRow, Half } from '../Layout'
import Section from '../Section'
import Title from '../Title'
import Paragraph from '../Paragraph'
import { AboutSectionWrap } from './styles'
import PlayVideoImage from './images/play-video.svg'


const AboutSection = () => (
  <AboutSectionWrap>
    <Container>
      <ResponsiveRow>
        <Half>
          <Title as="h1" color="white">What is Overpass</Title>
          <Paragraph color="white" size="large">
            Overpass connects phone talent from around the world with
            businesses looking to build remote customer engagement
            teams to increase sales, generate leads and so much more.
          </Paragraph>
        </Half>
        <Half>
          <img src={PlayVideoImage} />
        </Half>
      </ResponsiveRow>
    </Container>
  </AboutSectionWrap>
);

export default AboutSection;
