import React from 'react'
import { bodyContainerStyle } from './layout.styles'
import { Link } from './link'
import { Colors } from '../constants/colors'

const LinkColumn = ({ label, path, childItems }) => (
  <div style={{ minWidth: 160, marginRight: 20, marginBottom: 20 }}>
    <ul style={{ listStyle: 'none', margin: 0 }}>
      <li>
        <Link to={path} style={{ fontWeight: 'bold', color: Colors.grey }}>
          {label}
        </Link>
      </li>
      {childItems.nodes?.map(({ label, path }) => (
        <li key={path}>
          <Link to={path} style={{ color: Colors.grey }}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = ({ menus }) => {
  const footerMenu = (menus || []).find(
    ({ node: { name } }) => name === 'Footer'
  )
  const menuItems = footerMenu?.node?.menuItems || { nodes: [] }

  return (
    <div style={{ backgroundColor: '#555', color: '#eee' }}>
      <footer style={{ ...bodyContainerStyle }}>
        <nav>
          <div
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {menuItems.nodes.map(menuItem =>
              menuItem.childItems?.nodes?.length ? (
                <LinkColumn key={menuItem.path} {...menuItem} />
              ) : null
            )}
          </div>
        </nav>
        <div style={{ marginTop: 30 }}>
          © {new Date().getFullYear()} Toronto Curling Association
        </div>
      </footer>
    </div>
  )
}
