import React from 'react'
import styled from 'styled-components'
import { SectionPrimary } from '../Section'
import HeroImage from './images/hero.svg'
console.log("HeroImage", HeroImage)

export const IntroSectionWrap = styled(SectionPrimary)`
  background-image: url(${HeroImage})
`;
