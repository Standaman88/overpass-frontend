import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import { BoxWrap } from './styles'

const Box = ({ title, children }) => (
  <BoxWrap>
    <Title as="h5" style={{marginBottom:25}} >{title}</Title>
    {children}
  </BoxWrap>
);

export default Box;
