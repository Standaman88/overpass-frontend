import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import Title from '../Title'
import { Column, Row } from '../Layout'
import { InfoBoxWrap, InfoBoxIcon, Description } from './styles'




const InfoBox = ({ icon="analytics", title, description, children, color="#1E95EE" }) => (
  <InfoBoxWrap color={color}>
    <Row>
      <InfoBoxIcon>
        <Icon name={icon} />
      </InfoBoxIcon>
      <Column>
        <div>
          <Title as="h4" style={{marginBottom:10}} >{title}</Title>
          <Description>{ description || children }</Description>
        </div>
      </Column>
    </Row>
  </InfoBoxWrap>
);

export default InfoBox;
