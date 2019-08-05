import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { Column, Row } from '../Layout'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { PriceBoxWrap } from './styles'


const PriceBox = ({ title, description, children, color="#1E95EE" }) => (
  <PriceBoxWrap color={color}>
    <Title as="h5" style={{marginBottom:10}} >{title}</Title>
    <Paragraph>{ description || children }</Paragraph>
  </PriceBoxWrap>
);

export default PriceBox;
