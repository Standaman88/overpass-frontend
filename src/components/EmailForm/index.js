import React from 'react'
import styled from 'styled-components'
import { Row } from '../Layout'
import Paragraph from '../Paragraph'
import { EmailFormWrap, EmailField, SubmitButton } from './styles'



export const EmailForm = ({ email, caption }) => (
  <EmailFormWrap>
    <Row>
      <EmailField type="email" placeholder="Enter your email" value={email} />
      <SubmitButton type="submit" value="Get started" />
    </Row>
    <Row>
      {caption && <Paragraph color="white" size="small">{caption}</Paragraph>}
    </Row>
  </EmailFormWrap>
);

export default EmailForm;
