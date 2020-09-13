import React from 'react'
import { Link } from 'gatsby'

const maxImageWidth = 180
const maxImageHeight = 120

const styleForPlaceholder = {
  backgroundColor: '#bbb',
  backgroundSize: 'cover',
  opacity: 0.3,
}

const styleForFeatureImage = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

const Thumbnail = ({ uri, style }) => (
  <div style={style}>
    {
      <div
        style={{
          width: maxImageWidth,
          height: maxImageHeight,

          backgroundImage: uri
            ? `url('${uri}')`
            : `url('${require('../assets/logo+transparent+grey.png')}')`,

          borderTopLeftRadius: 3,
          borderBottomLeftRadius: 3,
          ...(uri ? styleForFeatureImage : styleForPlaceholder),
        }}
      />
    }
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
