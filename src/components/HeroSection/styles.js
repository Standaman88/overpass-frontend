import React from 'react'
import styled from 'styled-components'
import { SectionPrimary } from '../Section'
import HeroImage from './images/hero.svg'


export const HeroSectionWrap = styled(SectionPrimary)`
  background-image: url(${HeroImage})
`;
