import React from 'react'
import './resets.css'
import { LayoutWrap } from './styles'
export { Column, Row } from './styles'

const Layout = ({ children }) => (
  <LayoutWrap>{children}</LayoutWrap>
);

export default Layout;
