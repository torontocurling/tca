import React from 'react'

export const EmptyState = props => (
  <div style={{ textAlign: 'center', padding: 40, color: 'grey' }}>
    <p style={{ fontSize: 20 }}>
      There are no {props.listingType} listings at this time.
    </p>
    <p style={{ fontSize: 14 }}>Please check back again soon.</p>
  </div>
)
