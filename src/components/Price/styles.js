import React from 'react'
import styled from 'styled-components'


export const PriceWrap = styled.span`
  && * {
    color: ${props => props.color || '#1E95EE'} !important;
  }
`;

export const Digit = styled.strong`
  color: #1E95EE;
  border: 0;
  outline: 0;
  font-family: Arial, san-serif;
  font-size: 114px;
  // font-weight: bold;
`;

export const Sign = styled.sup`
  border: 0;
  outline: 0;
  font-family: Arial, san-serif;
  font-size: 36px;
  font-weight: bold;

  vertical-align: top;
  position: relative;
  top: 16px;
`;

export const Time = styled.strong`
  border: 0;
  outline: 0;
  font-family: Arial, san-serif;
  font-size: 24px;
  font-weight: bold;
  align-self: flex-end;
`;
