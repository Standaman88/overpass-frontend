import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import { SectionPrimary } from '../Section'


export const HighlightBoxWrap = styled.div`
  display: inline-flex;
`;

export const Title = styled.h3`
  color: ${props => props.color || '#1E95EE'};
  font-family: Arial, san-serif;
  font-size: 42px;
  font-weigth: bold;
  margin: 0;
  margin-bottom: 40px;
  text-align: ${props => props.position || 'left'}
`;

export const Description = styled.p`
  color: ${props => props.color || '#1E95EE'};
  font-family: Arial, san-serif;
  font-size: 24px;
  font-weigth: bold;
  line-height: 2em;
`;
