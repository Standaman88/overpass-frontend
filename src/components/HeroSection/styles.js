import React from 'react'
import styled from 'styled-components'
import { SectionPrimary } from '../Section'
import HeroImage from './images/hero.svg'


export const HeroSectionWrap = styled(SectionPrimary)`
  background-image: url(${HeroImage});
  background-position: center right;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: 60% 90%;
  height: 550px;
`;
