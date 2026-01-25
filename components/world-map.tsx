"use client"

import { MapContainer, TileLayer, CircleMarker, ZoomControl } from "react-leaflet"

const mapStops = [
  { name: "Chicago HQ", position: [41.8781, -87.6298] },
  { name: "Los Angeles", position: [34.0522, -118.2437] },
  { name: "New York", position: [40.7128, -74.006] },
  { name: "London", position: [51.5072, -0.1276] },
  { name: "Dubai", position: [25.2048, 55.2708] },
  { name: "Tokyo", position: [35.6762, 139.6503] },
]

type WorldMapProps = {
  className?: string
}

export function WorldMap({ className }: WorldMapProps) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={6}
      scrollWheelZoom={false}
      dragging
      className={className}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapStops.map((stop) => (
        <CircleMarker
          key={stop.name}
          center={stop.position as [number, number]}
          radius={7}
          pathOptions={{ color: "#00d4ff", fillColor: "#00d4ff", fillOpacity: 0.8, weight: 2 }}
        />
      ))}
      <ZoomControl position="bottomright" />
    </MapContainer>
  )
}
