import React from 'react'
import styled from 'styled-components'
import { PriceBoxWrap, Digit, Sign, Time } from './styles'


const Price = ({ price=0, time='', before='', after='', ...props }) => (
  <PriceWrap {...props}>
    {before && <Sign>{before}</Sign>}
    <Digit>{price}</Digit>
    {after && <Sign>{after}</Sign>}
    {time && <Time>{time}</Time>}
  </PriceWrap>
);

export default Price;
