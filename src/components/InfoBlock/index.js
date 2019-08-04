import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { InfoBlockWrap, InfoBlockIcon, Title, Description } from './styles'




const InfoBlock = ({ icon="analytics", title, description, children, color="#1E95EE" }) => (
  <InfoBlockWrap>
    <Row>
      <InfoBlockIcon>
        <Icon name={icon} />
      </InfoBlockIcon>
      <Column>
        <div>
          <Title color={color}>{title}</Title>
          <Description color={color}>{ description || children }</Description>
        </div>
      </Column>
    </Row>
  </InfoBlockWrap>
);

export default InfoBlock;
