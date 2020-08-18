import React from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/logo.svg'
import { rhythm, scale } from '../utils/typography'

const menuItems = [
  { text: 'Learn to Curl', uri: 'learn-to-curl' },
  { text: 'Select a League', uri: 'select-a-leage' },
  { text: 'Locate a Facility', uri: 'locate-a-facility' },
  { text: 'Find an Event', uri: 'find-an-event' },
]

const Menu = () => {
  return (
    <nav
      style={{
        flexDirection: 'row',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        fontSize: 18,
      }}
    >
      {menuItems.map(item => (
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <a
            href={`/${item.uri}`}
            style={{ textDecoration: 'none', color: 'darkred' }}
          >
            <b>{item.text}</b>
          </a>
        </div>
      ))}
    </nav>
  )
}

const bodyContainerStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(48),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}

const logoOffset = -20

const Header = () => {
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
          <img
            src={Logo}
            style={{
              width: 200,
              marginTop: logoOffset,
              marginBottom: logoOffset,
              marginLeft: logoOffset,
            }}
          />
        </div>
        <Menu />
      </header>
      <div
        style={{
          marginBottom: 20,
          borderBottomColor: '#EEE',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
        }}
      />
    </>
  )
}

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#555', color: '#eee' }}>
      <footer style={{ ...bodyContainerStyle }}>
        © {new Date().getFullYear()} Toronto Curling Association
      </footer>
    </div>
  )
}

const Layout = ({ location, title, children }) => {
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
      <Footer />
    </>
  )
}

export default Layout
