import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Container from '../Container'
import { Column, Row, ResponsiveRow, Half } from '../Layout'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { SignupSectionWrap } from './styles'

import SignupImage from './images/footer.svg'


const SignupSection = () => (
  <SignupSectionWrap>
    <Container>
      <ResponsiveRow>
        <Half>
          <Title as="h3" color="white">Sign up today for free</Title>
          <Paragraph color="white" size="large" style={{maxWidth:445,textAlign:'center'}}>
            It takes just a few minutes to set up a FREE account –
            and we’re available to answer any questions you have.
          </Paragraph>
          <Button color="white" background="transparent">Try it now</Button>
        </Half>
        <Half>
          {/* <img src={ProfilesImage} /> */}
        </Half>
      </ResponsiveRow>
    </Container>
  </SignupSectionWrap>
);

export default SignupSection;
