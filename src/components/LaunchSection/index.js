import React from 'react'
import styled from 'styled-components'
import HighlightBox from '../HighlightBox'
import InfoBox from '../InfoBox'
import { Column, Row } from '../Layout'
import Section from '../Section'
import { LaunchSectionWrap } from './styles'
import LaunchImage from './images/launch.svg'


const LaunchSection = () => (
  <LaunchSectionWrap>
    <Row>
      <HighlightBox title="Launch" position="left">
        Set up your first campaign and get your reps right to work
        on our fully integrated, browser-based platform.
      </HighlightBox>
      <Column>
        <img src={LaunchImage} />
      </Column>
    </Row>
    <Row style={{marginTop:50}}>
      <InfoBox icon="upload" title="Upload your leads">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBox>
      <InfoBox icon="calling" title="Start Calling">Use custom outbound numbers, calling queues and our preview dialer to ensure success with your call campaigns.</InfoBox>
      <InfoBox icon="script" title="Write your script">Create personalized scripts to ensure brand consistency by specifying exactly what agents should say on the phone.</InfoBox>
    </Row>
  </LaunchSectionWrap>
);

export default LaunchSection;
