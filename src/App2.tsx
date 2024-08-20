import React, { useState } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './App.css';
import capitals from './data/capitals';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const initialCapitals = capitals;


function App2() {
    const [capitals, setCapitals] = useState(initialCapitals);
  
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Screen1 capitals={capitals} />} />
          <Route path="/screen2" element={<Screen2 capitals={capitals} setCapitals={setCapitals} />} />
        </Routes>
      </Router>
    );
  }
  
  export default App2;