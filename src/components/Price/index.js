import React from 'react'
import styled from 'styled-components'
import { PriceWrap, Digit, Sign, Time } from './styles'


const Price = ({ time='', before='', after='', children, ...props }) => (
  <PriceWrap {...props}>
    {before && <Sign>{before}</Sign>}
    <Digit>{children}</Digit>
    {after && <Sign>{after}</Sign>}
    {time && <Time>{time}</Time>}
  </PriceWrap>
);

export default Price;
