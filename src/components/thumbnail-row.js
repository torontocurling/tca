import React from 'react'

const maxImageWidth = 180
const maxImageHeight = 120

const Thumbnail = ({ uri, style }) => (
  <div style={style}>
    <img
      src={uri}
      style={{
        width: 'auto',
        height: 'auto',
        maxWidth: maxImageWidth,
        maxHeight: maxImageHeight,
      }}
    />
  </div>
)

export const ThumbnailRow = ({ imageUri, title, description }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
      minHeight: maxImageHeight,
    }}
  >
    <Thumbnail uri={imageUri} style={{ width: 200, textAlign: 'center' }} />
    <div style={{ marginLeft: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)
