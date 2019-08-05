import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow } from '../Layout'
import Section from '../Section'
import Title from '../Title'

export const AgentSectionWrap = styled(Section)`
  // styles go here
`;

export const Subtitle = styled(Title)`
  line-height: 1.5em;
  text-align: center;
`;

export const Half = styled(Column)`
  flex-basis: 50%;
  flex-grow: 1;
  justify-content: center;
`;
