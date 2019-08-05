import React from 'react'
import styled from 'styled-components'
import { Column, Row, ResponsiveRow, Half } from '../Layout'
import Button from '../Button'
import Container from '../Container'
import Logo from '../Logo'
import Section from '../Section'
import { NavbarSectionWrap, NavButton } from './styles'


const NavbarSection = () => (
  <NavbarSectionWrap>
    <Container>
      <ResponsiveRow>
        <Half style={{alignItems:'flex-start'}}>
          <Logo name="overpass" />
        </Half>
        <Half style={{alignItems:'flex-end'}}>
          <Row>
            <NavButton border="none">Features</NavButton>
            <NavButton border="none">Pricing</NavButton>
            <NavButton xcolor="#1E95EE">Login</NavButton>
          </Row>
        </Half>
      </ResponsiveRow>
    </Container>
  </NavbarSectionWrap>
);

export default NavbarSection;
