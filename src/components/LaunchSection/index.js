import React from 'react'
import styled from 'styled-components'
import InfoBlock from '../InfoBlock'
import { Column, Row } from '../Layout'
import Section from '../Section'
import { LaunchSectionWrap } from './styles'


const LaunchSection = () => (
  <LaunchSectionWrap>
    Launch Section
    <Row>
      <InfoBlock icon="upload" title="Upload your leads">Easily upload and manage your contacts with custom fields and dynamic lists.</InfoBlock>
      <InfoBlock icon="calling" title="Start Calling">Use custom outbound numbers, calling queues and our preview dialer to ensure success with your call campaigns.</InfoBlock>
      <InfoBlock icon="script" title="Write your script">Create personalized scripts to ensure brand consistency by specifying exactly what agents should say on the phone.</InfoBlock>
    </Row>
  </LaunchSectionWrap>
);

export default LaunchSection;
