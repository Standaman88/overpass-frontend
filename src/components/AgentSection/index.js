import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Container from '../Container'
import { Column, Row, ResponsiveRow, Half } from '../Layout'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { AgentSectionWrap, Subtitle } from './styles'
import SearchImage from './images/search.svg'
import ProfilesImage from './images/profiles.svg'


const AgentSection = () => (
  <AgentSectionWrap>
    <Container>
      <ResponsiveRow>
        <Half>
          <img src={SearchImage} style={{padding:20}} />
          <Title as="h3">Find the perfect agent</Title>
          <Paragraph color="#3A3C3E" size="large" style={{maxWidth:445,textAlign:'center'}}>
            No more browsing through thousands of applications.
            Each week, we’ll send you a fresh batch of hand-picked,
            personally-vetted candidates.
          </Paragraph>
          <Button>Try today</Button>
        </Half>
        <Half>
          <Subtitle as="h5">
            Selections from the <br />Overpass Marketplace
          </Subtitle>
          <img src={ProfilesImage} />
        </Half>
      </ResponsiveRow>
    </Container>
  </AgentSectionWrap>
);

export default AgentSection;
