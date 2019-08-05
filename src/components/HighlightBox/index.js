import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import Title from '../Title'
import { Column, Row } from '../Layout'
import { HighlightBoxWrap, Description } from './styles'




const HighlightBox = ({ color="#1E95EE", position="left", title, description, children }) => (
  <HighlightBoxWrap position={position} color={color}>
    <Title as="h2" style={{marginBottom:40}}>{title}</Title>
    <Description>{ description || children }</Description>
  </HighlightBoxWrap>
);

export default HighlightBox;
