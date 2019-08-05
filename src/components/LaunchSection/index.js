import React from 'react'
import styled from 'styled-components'
import InfoBox from '../InfoBox'
import { Column, Row } from '../Layout'
import Section from '../Section'
import { LaunchSectionWrap } from './styles'


const LaunchSection = () => (
  <LaunchSectionWrap>
    Launch Section
    <Row>
      <InfoBox icon="upload" title="Upload your leads">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBox>
      <InfoBox icon="calling" title="Start Calling">Use custom outbound numbers, calling queues and our preview dialer to ensure success with your call campaigns.</InfoBox>
      <InfoBox icon="script" title="Write your script">Create personalized scripts to ensure brand consistency by specifying exactly what agents should say on the phone.</InfoBox>
    </Row>
  </LaunchSectionWrap>
);

export default LaunchSection;
