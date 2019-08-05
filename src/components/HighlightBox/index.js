import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { Column, Row } from '../Layout'
import { HighlightBoxWrap } from './styles'




const HighlightBox = ({ color="#1E95EE", position="left", title, description, children }) => (
  <HighlightBoxWrap position={position} color={color}>
    <Title as="h2" style={{marginBottom:40}}>{title}</Title>
    <Paragraph size="xlarge" style={{lineHeight:'1.5em'}}>{ description || children }</Paragraph>
  </HighlightBoxWrap>
);

export default HighlightBox;
