import React from 'react'
import styled from 'styled-components'


export const EmailFormWrap = styled.form`
  width: 360px;
  height: 50px;
  max-height: 50px;
`;

export const EmailField = styled.input`
  &&::placeholder {
    color: white;
  }

  border: 2px solid white;
  border-radius: 30px 0 0 30px;
  background: #59b8ff;
  color: white;
  font-size: 18px;
  line-height: 1em;
  height: 50px;
  margin: 0;
  outline: none;
  padding: 0;
  padding: 0 20px;
  width: 70%;
  width: auto;
`;

export const SubmitButton = styled.input`
  border: 2px solid white;
  border-radius: 0 30px 30px 0;
  background: white;
  color: #59b8ff;
  cursor: pointer;
  font-size: 18px;
  line-height: 1em;
  height: 54px;
  margin: 0;
  outline: none;
  padding: 0;
  padding: 0 20px;
  width: auto;
`;
