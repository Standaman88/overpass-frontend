import React from 'react'
import styled from 'styled-components'
import Section from '../Section'
import HeroSection from '../HeroSection'
import CustomersSection from '../CustomersSection'
import AboutSection from '../AboutSection'
import { IntroSectionWrap } from './styles'


const IntroSection = () => (
  <IntroSectionWrap>
    <HeroSection />
    <CustomersSection />
    <AboutSection />
  </IntroSectionWrap>
);

export default IntroSection;
