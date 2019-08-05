import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Section from '../Section'
import { Column, Row } from '../Layout'
import { HighlightBoxWrap, HighlightBoxIcon, Title, Description } from './styles'




const HighlightBox = ({ icon="analytics", title, description, children, color="#1E95EE" }) => (
  <HighlightBoxWrap>
    <Row>
      <HighlightBoxIcon>
        <Icon name={icon} />
      </HighlightBoxIcon>
      <Column>
        <div>
          <Title color={color}>{title}</Title>
          <Description color={color}>{ description || children }</Description>
        </div>
      </Column>
    </Row>
  </HighlightBoxWrap>
);

export default HighlightBox;
