import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { InfoBlockWrap, Title, Description } from './styles'


const InfoBlock = ({ icon="analytics", title, description, children }) => (
  <InfoBlockWrap>
    <Row>
      <Column>
        <Icon name={icon} />
      </Column>
      <Column>
        <div>
          <Title>{title}</Title>
          <Description>{ description || children }</Description>
        </div>
      </Column>
    </Row>
  </InfoBlockWrap>
);

export default InfoBlock;
