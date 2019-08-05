import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow } from '../Layout'
import Container from '../Container'
import Logo from '../Logo'
import Section from '../Section'
import Title from '../Title'
import { CustomersSectionWrap } from './styles'


const CustomersSection = () => (
  <CustomersSectionWrap>
    <Container>
      <Title as="h6" color="white" style={{fontWeight:'normal',marginBottom:25,textAlign:'center'}}>
        TRUSTED BY
      </Title>
      <Row>
        <Logo name="monday" />
        <Logo name="intel" />
        <Logo name="johnson" />
        <Logo name="handy" />
        <Logo name="flexport" />
      </Row>
    </Container>
  </CustomersSectionWrap>
);

export default CustomersSection;
