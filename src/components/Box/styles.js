import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import { SectionPrimary } from '../Section'


export const BoxWrap = styled(Column)`
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0px rgba(0,0,0,.16);
  display: inline-flex;
  height: 100%;
  max-width: 500px;
  max-height: 240px;
  width: 500px;

  margin: 15px 20px;
  padding: 50px 0;
`;
