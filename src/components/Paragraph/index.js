import React from 'react'
import styled from 'styled-components'

const SIZES = {
  xlarge: '24px',
  large: '18px',
  medium: '14px',
  small: '12px',
}

const Paragraph = styled.p`
  color: ${props => props.color || '#2A88FA'};
  font-size: ${props => SIZES[props.size || 'medium'] };
  font-family: Arial, san-serif;
  font-weigth: bold;
  margin: 1em 0;
  padding: 0;
  line-height: 1.25em;
`;

export default Paragraph;
