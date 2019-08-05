import React from 'react'
import styled from 'styled-components'
import HighlightBox from '../HighlightBox'
import InfoBox from '../InfoBox'
import { Column, Row, ResponsiveRow } from '../Layout'
import Section from '../Section'
import { MonitorSectionWrap } from './styles'
import MonitorImage from './images/monitor.svg'


const MonitorSection = () => (
  <MonitorSectionWrap>
    <ResponsiveRow>
      <Column>
        <img src={MonitorImage} />
      </Column>
      <HighlightBox title="Monitor" position="right">
        Gain real time insights into your reps performance get total
        visibility into every interaction with your customers.
      </HighlightBox>
    </ResponsiveRow>
    <ResponsiveRow style={{marginTop:50}}>
      <InfoBox color="#3A3C3E" icon="outcomes" title="Call Outcomes">Easily view the outcomes of all calls and quickly evaulate your campaign success.</InfoBox>
      <InfoBox color="#3A3C3E" icon="recording" title="Recording">Calls are automatically recorded and saved, and can be listened to at any time.</InfoBox>
      <InfoBox color="#3A3C3E" icon="analytics" title="Analytics">Gain insights into the performance and success of calls and campaigns.</InfoBox>
    </ResponsiveRow>
  </MonitorSectionWrap>
);

export default MonitorSection;
