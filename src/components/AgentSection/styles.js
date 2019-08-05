import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow } from '../Layout'
import Section from '../Section'
import Title from '../Title'
import CurveImage from './images/curve.svg'

export const AgentSectionWrap = styled(Section)`
  background: center top no-repeat;
  background-image: url(${CurveImage});
  /* background-size: cover; */

  background-size: 120%;
  background-position-y: -10px;
  padding-top: 260px;
`;

export const Subtitle = styled(Title)`
  line-height: 1.5em;
  text-align: center;
`;
