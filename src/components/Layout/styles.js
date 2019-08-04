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
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;
