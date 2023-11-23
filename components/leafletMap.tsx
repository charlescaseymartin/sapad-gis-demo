"use client"

import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { LatLngExpression, geoJSON } from "leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { LayersControl } from "react-leaflet/LayersControl";
import { GeoJSON, GeoJSONProps } from "react-leaflet/GeoJSON";
import { useMap } from "react-leaflet";

type LeafletMapType = {
  feature: any;
}

function SapadDataDisplay({ feature }: LeafletMapType) {
  const map = useMap();
  const geoObjectFeature = geoJSON(feature);
  map.fitBounds(geoObjectFeature.getBounds());

  return <GeoJSON key={`${feature.id}-${feature.properties.name}`} data={feature} />
}

export default function LeafletMap({ feature }: LeafletMapType) {
  const zoom = 14;
  const scrollWheelZoom = false;

  return (
    <div className="w-1/2 mt-10">
      {feature && (
        <MapContainer center={[30.5595, 22.9375]} zoom={zoom} scrollWheelZoom={scrollWheelZoom} style={{ width: "100%", height: "600px", zIndex: "10" }}>
          <SapadDataDisplay feature={feature} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )}
    </div>
  )
}