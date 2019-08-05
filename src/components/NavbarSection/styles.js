import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { SectionPrimary } from '../Section'

export const NavbarSectionWrap = styled(SectionPrimary)`
  // styles go here
`;

export const NavButton = styled(Button)`
  border-radius: 40px;
  border-color: ${props => props.border || 'white'};
  color: white;
  background: #0092FF;
  height: 40px;
  padding: 0 30px;
  min-width: auto;
  width: auto;
`;
