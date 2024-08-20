import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents} from 'react-leaflet'
import './App.css';
import countries from './data/capitals';
import screen1 from './App';
import screen2 from './Screen2';
import { useEffect, useState } from "react";
 interface Country {    
    id: number; 
    country: string;
    city: string;
    population: number;
    lat: number;
    lng: number;
  }
  
  interface Props {
    countries: Country[];
  }
  

function ListCapitals({ countries }: Props) {
  return (
    <div className="country">
      {countries.map((country: Country) => (
        <div key={country.id}>{country.country} à pour capitale: {country.city} est compte {country.population} d'habitants</div>
      ))}
    </div>
   
  ); 
};
function ShowCapitals({ countries }: Props) {
  return (
  <div className="country">
    {countries.map((country: Country) => (
      <Marker key={country.id} position={[country.lat, country.lng]}>
        <Popup>
          {country.city} 
          Population: {country.population}
        </Popup>
      </Marker>
    ))}</div>
  )
}


function App() {
 

  return (<>
  <div className="main">
  <div className="screenleft">
    <button>screen1</button>
    <ListCapitals  countries={countries}/>
    
  </div>
  
  <div>
  <MapContainer center={[45.24358, -0.27344]} zoom={10} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

<ShowCapitals countries={countries}/>
    {/* <div className="marker1">
      <Marker position={[48.866667, 2.333333]}>
        <Popup>
          <h2>
            Paris
            2,08 millions d'habitants
          </h2>
        </Popup>
      </Marker>
    </div>

    <div className="marker2">
      <Marker position={[45.24358, -0.27344]}>
        <Popup><h1>Ici c'est beecoming !</h1></Popup>
      </Marker>
    </div>

    <div className="marker3">
      <Marker position={[39.553444, -7.839318999999989]}>
        <Popup><h1>Lisbonne, 567.000 d'habitants</h1></Popup>
      </Marker>
    </div>

    <div className="marker4">
      <Marker position={[40.416705, -3.703582]}>
        <Popup><h1>Madrid, 3.33 millions d'habitants</h1></Popup>
      </Marker>
    </div>

    <div className="marker5">
      <Marker position={[51.5073509, -0.1277583]}>
        <Popup><h1>London, 8,982 millions d'habitants</h1></Popup>
      </Marker>
    </div>

    <div className="marker6">
      <Marker position={[41.902784, 12.496366]}>
        <Popup><h1>Rome, 2,873 millions d'habitants</h1></Popup>
      </Marker>
    </div> */}
   
 
  </MapContainer>
  </div>
  </div></>
  );
 
}




export default App;
