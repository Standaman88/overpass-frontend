import React from 'react'
import styled from 'styled-components'
import InfoBlock from '../InfoBlock'
import { Column, Row } from '../Layout'
import Section from '../Section'
import { MonitorSectionWrap } from './styles'


const MonitorSection = () => (
  <MonitorSectionWrap>
    Monitor Section
    <Row>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
      <InfoBlock icon="analytics" title="Test Title">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
    </Row>
  </MonitorSectionWrap>
);

export default MonitorSection;
