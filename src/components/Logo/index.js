import React from 'react'
import styled from 'styled-components'


import LogoFlexport from './images/flexport.svg'
import LogoHandy from './images/handy.svg'
import LogoIntel from './images/intel.svg'
import LogoJohnson from './images/johnson.svg'
import LogoMonday from './images/monday.svg'

const LOGOS = {
  flexport: LogoFlexport,
  handy: LogoHandy,
  intel: LogoIntel,
  johnson: LogoJohnson,
  monday: LogoMonday,
};

export const Logo = styled.img.attrs(({ name="intel" }) => ({
  src: name in LOGOS ? LOGOS[name] : name
}))`
  display: inline-block;
  margin: 0;
  padding: 0;
  max-height: 50px;
  height: auto;
  width: auto;
`;

export default Logo;
