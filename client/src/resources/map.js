// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corregir el problema con los íconos de Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [21.4486305, -104.8995945,19.79]; // Coordenadas de Yuba

  return (
    <MapContainer center={position} zoom={18} style={{ height: '500px', width: '100%' }} dragging={false} 
    scrollWheelZoom={false} doubleClickZoom={false} boxZoom={false} touchZoom={false} keyboard={false} zoomDelta={0.5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} >
        <Popup src="google.com">
          Haro Multimedia Foto y Video
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
