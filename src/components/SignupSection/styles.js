import React from 'react'
import styled from 'styled-components'
import { SectionPrimary } from '../Section'
import SignupImage from './images/footer.svg'


export const SignupSectionWrap = styled(SectionPrimary)`
  background-image: url(${SignupImage});
  background-position: center right;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-size: 80% 80%;
  background-position-x: 235%;
  height: 520px;
`;
