import React from 'react'
import { bodyContainerStyle } from './layout.styles'
import { Link } from './link'
import { Colors } from '../constants/colors'

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
            {menuItems.nodes.map(menuItem => (
              <Link
                key={menuItem.path}
                to={menuItem.path}
                style={{
                  fontWeight: 'bold',
                  color: Colors.grey,
                  marginRight: 40,
                  marginBottom: 20,
                }}
              >
                {menuItem.label}
              </Link>
            ))}
          </div>
        </nav>
        <div style={{ marginTop: 30 }}>
          © {new Date().getFullYear()} Toronto Curling Association
        </div>
      </footer>
    </div>
  )
}
