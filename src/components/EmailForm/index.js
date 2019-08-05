import React from 'react'
import styled from 'styled-components'
import { Row } from '../Layout'
import { EmailFormWrap, EmailField, SubmitButton } from './styles'


export const EmailForm = ({ email }) => (
  <EmailFormWrap>
    <Row>
      <EmailField type="email" placeholder="Enter your email" value={email} />
      <SubmitButton type="submit" value="Get started" />
    </Row>
  </EmailFormWrap>
);

export default EmailForm;
