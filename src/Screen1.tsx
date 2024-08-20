import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Capitals {    
  id: number; 
  country: string;
  city: string;
  population: number;
  lat: number;
  lng: number;
}

interface Props {
  capitals: Capitals[];
}

function Screen1({ capitals }: Props) {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {capitals.map((capital) => (
        <Marker key={capital.id} position={[capital.lat, capital.lng]}>
          <Popup>
            <strong>{capital.city}</strong><br />
            Population: {capital.population}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Screen1;
