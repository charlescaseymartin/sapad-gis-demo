"use client"

import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
// import { LayersControl } from "react-leaflet/LayersControl";

import "leaflet/dist/leaflet.css";


export default function LeafletMap() {
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09])
  const zoom = 14;
  const scrollWheelZoom = false;

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: '400px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}