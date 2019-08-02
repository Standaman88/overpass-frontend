import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { InfoBlockWrap } from './styles'


const InfoBlock = ({ icon, title, description, children }) => (
  <InfoBlockWrap>
    <Row>
      <Column>
        <Icon name={icon}} />
      </Column>
      <Column>
        <Title>{title}</Title>
        <Description>{ description || children }</Description>
      </Column>
    </Row>
  </InfoBlockWrap>
);

export default InfoBlock;
