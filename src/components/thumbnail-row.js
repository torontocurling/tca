import React from 'react'
import { Link } from 'gatsby'

const maxImageWidth = 180
const maxImageHeight = 120

const Thumbnail = ({ uri, style }) => (
  <div style={style}>
    {!!uri ? (
      <img
        src={uri}
        alt=""
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: maxImageWidth,
          maxHeight: maxImageHeight,
        }}
      />
    ) : (
      <div
        style={{
          width: maxImageWidth,
          height: maxImageHeight,
          backgroundColor: '#bbb',
          backgroundImage: `url('${require('../assets/logo+transparent+grey.png')}')`,
          backgroundSize: 'cover',
          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
          opacity: 0.3,
        }}
      />
    )}
  </div>
)

export const ThumbnailRow = ({ imageUri, title, description, link }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
      minHeight: maxImageHeight,
    }}
  >
    <Link to={link}>
      <Thumbnail uri={imageUri} style={{ width: 200, textAlign: 'center' }} />
    </Link>
    <div style={{ marginLeft: 20, paddingTop: 15 }}>
      <h3>
        <Link to={link} style={{ color: '#3275b8', textDecoration: 'none' }}>
          {title}
        </Link>
      </h3>
      <p>{description}</p>
    </div>
  </div>
)
