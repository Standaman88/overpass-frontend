import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import { SectionPrimary } from '../Section'


export const HighlightBoxWrap = styled(Column)`
  justify-content: center;
  align-items: ${props => props.position == 'right' ? 'flex-end' : 'flex-start'};
  max-width: 420px;

  && * {
    color: ${props => props.color || '#1E95EE'} !important;
    text-align: ${props => props.position || 'left'} !important;
  }
`;
