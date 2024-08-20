import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Écran 1: Carte</Link></li>
        <li><Link to="/screen2">Écran 2: Liste des capitales</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;