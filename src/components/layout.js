import React from 'react'
import Logo from '../assets/logo.svg'
import { Footer } from './footer'
import { bodyContainerStyle } from './layout.styles'

const menuItems = [
  { text: 'Learn to Curl', uri: '/learn-to-curl' },
  { text: 'Select a League', uri: '/' },
  { text: 'Find an Event', uri: '/' },
  { text: 'Find a Facility', uri: '/clubs' },
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
        <div key={item.text} style={{ flexGrow: 1, textAlign: 'center' }}>
          <a
            href={item.uri}
            style={{ textDecoration: 'none', color: 'darkred' }}
          >
            <b>{item.text}</b>
          </a>
        </div>
      ))}
    </nav>
  )
}

const logoVerticalOffset = -20

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
          <a href="/">
            <img
              src={Logo}
              alt="TCA Logo"
              style={{
                width: 200,
                marginTop: logoVerticalOffset,
                marginBottom: logoVerticalOffset,
                marginLeft: -10,
                border: 0,
              }}
            />
          </a>
        </div>
        <Menu />
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
