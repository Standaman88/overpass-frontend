import React from 'react'
import styled from 'styled-components'


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px;
  margin: 0;
  padding: 50px 0;
`;

export const SectionPrimary = styled(Section)` background-color: #0092FF; `;
export const SectionPrimaryLight = styled(Section)` background-color: #F0F9FF; `;
export const SectionLight = styled(Section)` background-color: #F0F3FC; `;
export const SectionDark = styled(Section)` background-color: #2F2F2F; `;

export default Section;
