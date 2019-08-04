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
      <InfoBlock color="#3A3C3E" icon="payments" title="Status-based Payments">
        Pay only for the time your reps are actively working on the system–nothing more.
      </InfoBlock>
      <InfoBlock color="#3A3C3E" icon="international" title="Pay Internationally">
        With reps from all over the globe, payments can get tricky.
        We handle international payments so you don’t have to.
      </InfoBlock>
      <InfoBlock color="#3A3C3E" icon="billing" title="Integrated Billing">
        We facilitate payments on your behalf and provide you with comprehensive invoices.
      </InfoBlock>
    </Row>
  </PaySectionWrap>
);

export default PaySection;
