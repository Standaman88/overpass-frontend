import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow, Half } from '../Layout'
import Container from '../Container'
import EmailForm from '../EmailForm'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { HeroSectionWrap } from './styles'
import HeroImage from './images/hero.svg'


const HeroSection = () => (
  <HeroSectionWrap>
    <Container>
      <ResponsiveRow>
        <Half style={{alignItems:'flex-start'}}>
          <Title as="h3" color="white" style={{lineHeight:'1.25em'}}>
            Find, hire & manage your own remote sales team
          </Title>
          <Paragraph color="white" size="large">
            Overpass provides the talent and technology to
            make all of your sales campaigns a success
          </Paragraph>
          <EmailForm caption="Get started in minutes. No credit card required." />
        </Half>
        <Half></Half>
      </ResponsiveRow>
    </Container>
  </HeroSectionWrap>
);

export default HeroSection;
