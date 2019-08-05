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
  margin: 0;
  padding: 0;
  /* margin-bottom: 40px; */
  line-height: 1.25em;

  /* &&.xlarge { font-size: 24px; }
  &&.large { font-size: 18px; }
  &&.medium { font-size: 14px; }
  &&.small { font-size: 12px; } */
`;

export default Paragraph;
