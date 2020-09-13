/* global google */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useCallback, useRef } from 'react'

let mapInitialized = false

const TCAmap = function () {
  google.maps.visualRefresh = true

  const styles = [
    {
      featureType: 'water',
      stylers: [{ color: '#D4EFFC' }],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.fill',
      stylers: [{ color: '#f0f2f2' }],
    },
    {
      featureType: 'transit.station.airport',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [{ color: '#dddddd' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#819FD2' }],
    },
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#5C88C6' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'off' }],
    },
  ]

  const mapOptions = {
    center: new google.maps.LatLng(43.683515, -79.444596),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: styles,
    navigationControl: false,
    mapTypeControl: false,
    minZoom: 7,
  }

  let hasMap = false
  let markers = []

  let map

  // clubs - marker: [{lat: 0, lng: 0, title:'My Marker'}]

  function initialize({ initialZoom, clubs }) {
    if (hasMap || !clubs) return false

    if (clubs.lat) {
      mapOptions.zoom = 15
      mapOptions.center = new google.maps.LatLng(clubs.lat, clubs.lng)
      clubs = [clubs]
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions)
    let swLat, swLng, neLat, neLng

    for (let i = 0; i < clubs.length; i++) {
      const marker = clubs[i]
      marker.position = new google.maps.LatLng(marker.lat, marker.lng)
      marker.map = map
      markers.push(new google.maps.Marker(marker))

      if (!swLat) {
        neLat = swLat = marker.lat
        neLng = swLng = marker.lng
      } else {
        if (marker.lat < swLat) {
          swLat = marker.lat
        }
        if (marker.lng < swLng) {
          swLng = marker.lng
        }
        if (marker.lat > neLat) {
          neLat = marker.lat
        }
        if (marker.lng > neLng) {
          neLng = marker.lng
        }
      }
    }

    if (!mapOptions.zoom && !initialZoom) {
      const sw = new google.maps.LatLng(swLat, swLng),
        ne = new google.maps.LatLng(neLat, neLng),
        bounds = new google.maps.LatLngBounds(sw, ne)

      map.fitBounds(bounds)
    }

    if (initialZoom) {
      map.setZoom(initialZoom)
      if (typeof clubs[0]?.lat === 'number') {
        map.setCenter({ lat: clubs[0].lat, lng: clubs[0].lng })
      }
    }

    hasMap = true
  }

  return {
    init: initialize,

    zoom: function (dir) {
      const zoom = map.getZoom(),
        newzoom = zoom + dir
      if (newzoom > 19 || newzoom < 0) return false

      map.setZoom(newzoom)
    },

    markerClick: function (handler) {
      for (let m = 0; m < markers.length; m++) {
        ;(function (mark) {
          google.maps.event.addListener(mark, 'click', function () {
            if (typeof handler === 'function') handler(mark)
          })
        })(markers[m])
      }
    },

    eachMarker: function (handler) {
      for (let m = 0; m < markers.length; m++) {
        ;(function (mark) {
          if (typeof handler === 'function') handler(mark)
        })(markers[m])
      }
    },

    isThere: function () {
      return hasMap
    },

    destroy: function () {
      hasMap = false
      markers = []
    },
  }
}

const mapZoomButtonStyle = {
  backgroundColor: 'rgba(255,255,255,0.8)',
  borderRadius: 3,
  width: 40,
  fontSize: '1.5em',
  fontWeight: 700,
  textAlign: 'center',
  cursor: 'pointer',
  marginTop: 5,
  userSelect: 'none',
}

export const ClubMap = ({ clubs, initialZoom, onMarkerClick }) => {
  const map = useRef()

  const initMap = useCallback(() => {
    map.current = TCAmap()
    map.current.init({
      initialZoom,
      clubs: clubs.map(club => ('node' in club ? club.node : club)),
    })
    map.current.markerClick(onMarkerClick)
  }, [map, clubs, initialZoom])

  useEffect(() => {
    if (mapInitialized) {
      initMap()
      return
    }
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBpHOBeifASePkB_Jm2otvjzAk3EPEWN5w&sensor=false'
    script.type = 'text/javascript'
    script.onload = initMap
    document.head.appendChild(script)

    mapInitialized = true
  })

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ width: '100%', height: 300, marginBottom: 40 }} />
      <div
        class="mapcontrols"
        style={{
          position: 'absolute',
          top: 10,
          right: 40,
          width: 22,
          zIndex: 200,
        }}
      >
        <div
          id="zoomin"
          title="Zoom In"
          style={mapZoomButtonStyle}
          onClick={() => map.current.zoom(1)}
        >
          +
        </div>
        <div
          id="zoomout"
          title="Zoom Out"
          style={mapZoomButtonStyle}
          onClick={() => map.current.zoom(-1)}
        >
          -
        </div>
      </div>
    </div>
  )
}
