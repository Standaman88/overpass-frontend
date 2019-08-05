import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { InfoBoxWrap, InfoBoxIcon, Title, Description } from './styles'




const InfoBox = ({ icon="analytics", title, description, children, color="#1E95EE" }) => (
  <InfoBoxWrap>
    <Row>
      <InfoBoxIcon>
        <Icon name={icon} />
      </InfoBoxIcon>
      <Column>
        <div>
          <Title color={color}>{title}</Title>
          <Description color={color}>{ description || children }</Description>
        </div>
      </Column>
    </Row>
  </InfoBoxWrap>
);

export default InfoBox;
