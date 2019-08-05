import React from 'react'
import styled from 'styled-components'


const Container = styled.div.attrs({ className: 'container' })`
  display: flex;
  flex-direction: column;
  align-self: center;

  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 375px) {
    max-width: 320px;
  }
`;

export default Container;
