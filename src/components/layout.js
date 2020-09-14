import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { Footer } from './footer'
import { bodyContainerStyle } from './layout.styles'
import { Colors } from '../constants'
import { Link } from './link'

const menuItems = [
  { text: 'Learn to Curl', uri: '/learn-to-curl' },
  { text: 'Select a League', uri: '/select-a-league' },
  { text: 'Find an Event', uri: '/find-an-event' },
  { text: 'Locate a Facility', uri: '/clubs' },
]

const MenuContainer = styled('nav')`
  flex-direction: row;
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-size: 18px;
  transition: top 0.5s ease-out;

  @media (max-width: 768px) {
    background-color: ${Colors.blue};
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    top: ${props => (props.mobileNavShown ? '130px' : '-100vh')};
    left: 0;
    z-index: 100;
  }
`

const MobileMenuLink = styled('div')`
  display: none;
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  flex: 1;
  padding-right: 10px;
  color: ${Colors.darkBlue};

  @media (max-width: 768px) {
    display: inline-block;
  }
`

const MenuItem = styled('div')`
  flex-grow: 1;
  display: flex;
  text-align: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    border-bottom: 4px solid white;
  }
`

const MenuLink = styled(Link)`
  color: darkred;
  font-weight: 700;

  @media (max-width: 768px) {
    color: white;
    width: 100%;
    line-height: 80px;
  }
`

const Menu = ({ mobileNavShown }) => {
  return (
    <MenuContainer mobileNavShown={mobileNavShown}>
      {menuItems.map(item => (
        <MenuItem key={item.text}>
          <MenuLink href={item.uri}>{item.text}</MenuLink>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

const logoVerticalOffset = -20

const Header = () => {
  const [mobileNavShown, showMobileNav] = useState(false)

  return (
    <>
      <header
        style={{
          flexDirection: 'row',
          display: 'flex',
          paddingBottom: 20,
          ...bodyContainerStyle,
        }}
      >
        <div style={{ marginRight: 20 }}>
          <a href="/">
            <img
              src={Logo}
              alt="TCA Logo"
              style={{
                width: 250,
                marginTop: logoVerticalOffset,
                marginBottom: logoVerticalOffset,
                marginLeft: -10,
                border: 0,
              }}
            />
          </a>
        </div>
        <Menu mobileNavShown={mobileNavShown} />
        <MobileMenuLink onClick={() => showMobileNav(!mobileNavShown)}>
          {mobileNavShown ? 'Close' : 'Menu'}
        </MobileMenuLink>
      </header>
      <div
        style={{
          marginBottom: 0,
          borderBottomColor: '#EEE',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
        }}
      />
    </>
  )
}

const Layout = ({ location, title, children, pageContext }) => {
  return (
    <>
      <Header />
      <div
        style={{
          ...bodyContainerStyle,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer menus={pageContext.menus} />
    </>
  )
}

export default Layout
