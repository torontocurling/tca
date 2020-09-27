import React, { useEffect, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link, FakeLink } from './link'
import { Colors } from '../constants/colors'

const Container = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Menu = styled('nav')`
  min-width: 200px;
  margin-right: 20px;
  padding-right: 20px;
  border-color: ${Colors.grey};
  border-right-style: solid;
  border-right-width: 2px;

  @media (max-width: 768px) {
    border-right-width: 0px;
    border-top-style: solid;
    border-top-width: 2px;
  }
`

export const PageNavLayout = ({
  logo,
  topMenu,
  pageMenu,
  menuItems,
  children,
  hideParent,
  pinOnScroll,
}) => {
  const [pinned, setPinned] = useState(false)
  const menuRef = useRef(null)
  const initialOffset = useRef(0)

  const handleScroll = useCallback(() => {
    if (window.scrollY - 20 > initialOffset.current) {
      setPinned(true)
    } else {
      setPinned(false)
    }
  }, [initialOffset.current])

  useEffect(() => {
    if (pinOnScroll !== true) return

    initialOffset.current = menuRef.current.offsetTop
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuPositionStyle = pinned ? { position: 'fixed', top: 10 } : null

  return (
    <Container>
      {(menuItems.length > 0 || logo || topMenu) && (
        <Menu>
          {logo && <img src={logo} style={{ maxWidth: 180 }} />}
          {topMenu}
          {menuItems.length > 0 && (
            <ul
              style={{ listStyle: 'none', marginLeft: 0, ...menuPositionStyle }}
              ref={menuRef}
            >
              {hideParent !== true && (
                <li key={pageMenu.path} style={{ marginTop: 20 }}>
                  <Link to={pageMenu.path}>{pageMenu.label}</Link>
                </li>
              )}
              {menuItems.map(menuItem => (
                <li key={menuItem.path} style={{ marginTop: 20 }}>
                  {!menuItem.path || menuItem.disabled ? (
                    <FakeLink>{menuItem.label}</FakeLink>
                  ) : (
                    <Link to={menuItem.path}>{menuItem.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Menu>
      )}
      <article style={{ flexGrow: 1 }}>{children}</article>
    </Container>
  )
}
