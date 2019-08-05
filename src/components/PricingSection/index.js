import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow } from '../Layout'
import Paragraph from '../Paragraph'
import Price from '../Price'
import Box from '../Box'
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
      <Title as="h3">Transparent Pricing</Title>
      <PricingParagraph color="#3A3C3E" size="large" style={{maxWidth:650}}>
        We’ve made our pricing as simple as possible.
        With our free call center software, all you pay for is
        talk-time and your contractor’s hourly rate.
      </PricingParagraph>
      <ResponsiveRow style={{justifyContent:'center'}}>
        <Box title="Average Marketplace Rates">
          <Row>
            <Price before="$">5- </Price>
            <Price before="$" time="/hour">20</Price>
          </Row>
        </Box>

        <Box title="Make Standard Calls">
          <Row>
            <Price after="&#162;" time="/minute">2.9</Price>
          </Row>
        </Box>
      </ResponsiveRow>
    </Column>
  </PricingSectionWrap>
);

export default PricingSection;
