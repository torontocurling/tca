import React from 'react'
import { bodyContainerStyle } from './layout.styles'
import { Link } from './link'
import { Colors } from '../constants/colors'

const LinkColumn = ({ label, path, childItems }) => (
  <div style={{ minWidth: 160, marginRight: 20 }}>
    <ul style={{ listStyle: 'none', margin: 0 }}>
      <li>
        <Link to={path} style={{ fontWeight: 'bold', color: Colors.grey }}>
          {label}
        </Link>
      </li>
      {childItems.nodes?.map(({ label, path }) => (
        <li>
          <Link to={path} style={{ color: Colors.grey }}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = ({ menus }) => {
  const footerMenu = menus.find(({ node: { name } }) => name === 'Footer')
  const menuItems = footerMenu?.node?.menuItems || { nodes: [] }
  console.log(menuItems)

  return (
    <div style={{ backgroundColor: '#555', color: '#eee' }}>
      <footer style={{ ...bodyContainerStyle }}>
        <nav>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {menuItems.nodes.map(menuItem => (
              <LinkColumn {...menuItem} />
            ))}
          </div>
        </nav>
        <div style={{ marginTop: 50 }}>
          © {new Date().getFullYear()} Toronto Curling Association
        </div>
      </footer>
    </div>
  )
}