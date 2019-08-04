import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import { SectionPrimary } from '../Section'


export const InfoBlockWrap = styled.div`
  display: inline-flex;
  max-width: 300px;
`;

export const InfoBlockIcon = styled(Column)`
  justify-content: flex-start;
  margin-right: 20px;
`;

export const Title = styled.h4`
  color: ${props => props.color || '#1E95EE'};
  font-family: Arial, san-serif;
  font-size: 20px;
  font-weigth: bold;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  color: ${props => props.color || '#1E95EE'};
  font-family: Arial, san-serif;
  font-size: 14px;
  line-height: 1.25em;
`;
