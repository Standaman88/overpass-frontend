import React from 'react'
import styled from 'styled-components'
import { Column, Row } from '../Layout'
import InfoBlock from '../InfoBlock'
import Section from '../Section'
import { PaySectionWrap } from './styles'


const PaySection = () => (
  <PaySectionWrap>
    Pay Section
    <Row>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
    </Row>
  </PaySectionWrap>
);

export default PaySection;
