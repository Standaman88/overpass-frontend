import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { Column, Row } from '../Layout'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { InfoBoxWrap, InfoBoxIcon } from './styles'


const InfoBox = ({ icon="analytics", title, description, children, color="#1E95EE" }) => (
  <InfoBoxWrap color={color}>
    <Row>
      <InfoBoxIcon>
        <Icon name={icon} />
      </InfoBoxIcon>
      <Column>
        <div>
          <Title as="h4" style={{marginBottom:10}} >{title}</Title>
          <Paragraph>{ description || children }</Paragraph>
        </div>
      </Column>
    </Row>
  </InfoBoxWrap>
);

export default InfoBox;
