import React from 'react'
import styled from 'styled-components'
import { Column } from '../Layout'
import Paragraph from '../Paragraph'
import Section from '../Section'
import Title from '../Title'
import { PricingSectionWrap } from './styles'

const PricingParagraph = styled(Paragraph)`
  line-height: 1.5em;
  text-align: center;
`;

const PricingSection = () => (
  <PricingSectionWrap>
    <Column>
      <Title as="h3" style={{marginBottom:20}}>Transparent Pricing</Title>
      <PricingParagraph color="#3A3C3E" size="large" style={{maxWidth:650}}>
        We’ve made our pricing as simple as possible.
        With our free call center software, all you pay for is
        talk-time and your contractor’s hourly rate.
      </PricingParagraph>
    </Column>
  </PricingSectionWrap>
);

export default PricingSection;
