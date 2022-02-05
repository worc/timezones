import React from 'react'
import { GeoJSON, MapContainer, Polygon, TileLayer, Marker, Popup } from 'react-leaflet'

import countries from './geojson/countries.json'
import ne_timezones from './geojson/ne_10m_time_zones.json'

export default function Timezones () {
  console.log(countries)
  console.log(ne_timezones)
  const firstTimeZone = ne_timezones.features[0]


  return (
    <MapContainer
      center={[45, 0]}
      style={{ border: '1px solid black', height: '80vh'}}
      zoom={1}
    >
      { firstTimeZone.geometry &&
        <GeoJSON
          key={'first'}
          data={ne_timezones}
        />
      }
      { countries &&
        <GeoJSON
          key={'countries'}
          data={countries}
        />
      }
    </MapContainer>
  )
}
