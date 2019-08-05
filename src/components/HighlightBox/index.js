import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { HighlightBoxWrap, Title, Description } from './styles'




const HighlightBox = ({ position="left", title, description, children, color="#1E95EE" }) => (
  <HighlightBoxWrap>
    <Title position={position}>{title}</Title>
    <Description position={position}>{ description || children }</Description>
  </HighlightBoxWrap>
);

export default HighlightBox;
