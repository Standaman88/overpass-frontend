import React from 'react'
import styled from 'styled-components'
import InfoBox from '../InfoBox'
import { Column, Row } from '../Layout'
import Section from '../Section'
import { MonitorSectionWrap } from './styles'


const MonitorSection = () => (
  <MonitorSectionWrap>
    Monitor Section
    <Row>
      <InfoBox color="#3A3C3E" icon="outcomes" title="Call Outcomes">Easily view the outcomes of all calls and quickly evaulate your campaign success.</InfoBox>
      <InfoBox color="#3A3C3E" icon="recording" title="Recording">Calls are automatically recorded and saved, and can be listened to at any time.</InfoBox>
      <InfoBox color="#3A3C3E" icon="analytics" title="Analytics">Gain insights into the performance and success of calls and campaigns.</InfoBox>
    </Row>
  </MonitorSectionWrap>
);

export default MonitorSection;
