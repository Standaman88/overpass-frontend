import React from 'react'
import styled from 'styled-components'
import { Column, Row } from '../Layout'
import HighlightBox from '../HighlightBox'
import InfoBox from '../InfoBox'
import Section from '../Section'
import { PaySectionWrap } from './styles'
import PayImage from './images/pay.svg'


const PaySection = () => (
  <PaySectionWrap>
    <Row>
      <HighlightBox title="Pay" position="left">
        No matter the size of your team or the number of features you use,
        we make it easy to control your budget with clear, easy to understand billing.
      </HighlightBox>
      <Column>
        <img src={PayImage} />
      </Column>
    </Row>
    <Row style={{marginTop:50}}>
      <InfoBox color="#3A3C3E" icon="payments" title="Status-based Payments">
        Pay only for the time your reps are actively working on the system–nothing more.
      </InfoBox>
      <InfoBox color="#3A3C3E" icon="international" title="Pay Internationally">
        With reps from all over the globe, payments can get tricky.
        We handle international payments so you don’t have to.
      </InfoBox>
      <InfoBox color="#3A3C3E" icon="billing" title="Integrated Billing">
        We facilitate payments on your behalf and provide you with comprehensive invoices.
      </InfoBox>
    </Row>
  </PaySectionWrap>
);

export default PaySection;
