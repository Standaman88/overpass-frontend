import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import { SectionPrimary } from '../Section'


export const InfoBoxWrap = styled.div`
  display: inline-flex;
  max-width: 300px;

  && * {
    color: ${props => props.color || '#1E95EE'};
  }
`;

export const InfoBoxIcon = styled(Column)`
  justify-content: flex-start;
  margin-right: 20px;
`;

export const Description = styled.p`
  font-family: Arial, san-serif;
  font-size: 14px;
  line-height: 1.25em;
`;
