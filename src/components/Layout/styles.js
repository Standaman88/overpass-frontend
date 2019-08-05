import React from 'react'
import styled from 'styled-components'

export const LayoutWrap = styled.main`
  body {
    font-family: Arial !important;
    font-size: 16px !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: auto;

  margin: 0;
  padding: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: auto;
  margin: 0;
  padding: 0;
`;

export const ResponsiveRow = styled(Row)`
  flex-wrap: wrap;
  /* flex-basis: 100px;
  flex-grow: 1;
  flex-shrink: 1; */
`
