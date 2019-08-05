import React from 'react'
import styled from 'styled-components'


const Button = styled.a`
  color: ${props => props.color || '#1E95EE'};
  background: ${props => props.background || 'white'};
  border: 1px solid ${props => props.color || '#1E95EE'};
  border-radius: 5px;

  font-family: Arial, san-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;

  outline: none;
  cursor: pointer;
`;

export default Button;
