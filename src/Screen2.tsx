import React, { useState } from 'react';
import countries from './data/capitals';


interface Capital {
    id: number;
    country: string;
    city: string;
    population: number;
    lat: number;
    lng: number;
  }
  
  interface Screen2Props {
    capitals: Capital[];
    setCapitals: React.Dispatch<React.SetStateAction<Capital[]>>;
  }
  function Screen2({ capitals, setCapitals }: Screen2Props) {
    const [newCapital, setNewCapital] = useState<Capital>({
      id: capitals.length + 1,
      country: '',
      city: '',
      population: 0,
      lat: 0,
      lng: 0
    });
  
    const handleAddCapital = () => {
      setCapitals([...capitals, { ...newCapital, id: capitals.length + 1 }]);
      setNewCapital({ id: capitals.length + 1, country: '', city: '', population: 0, lat: 0, lng: 0 });
    };
  
    const handleDelete = (id: number) => {
      setCapitals(capitals.filter(capital => capital.id !== id));
    };
  
    const handleChange = (id: number, key: keyof Capital, value: string | number) => {
      setCapitals(capitals.map(capital => capital.id === id ? { ...capital, [key]: value } : capital));
    };
  
    return (
      <div>
        <h2>⬇️ Liste des capitales ⬇️</h2>
        <ul>
          {capitals.map(capital => (
            <li key={capital.id}>
              <input
                type="text"
                value={capital.city}
                onChange={(e) => handleChange(capital.id, 'city', e.target.value)}
              />
              <input
                type="text"
                value={capital.country}
                onChange={(e) => handleChange(capital.id, 'country', e.target.value)}
              />
              <input
                type="number"
                value={capital.population}
                onChange={(e) => handleChange(capital.id, 'population', parseInt(e.target.value))}
              />
              <input
                type="number"
                value={capital.lat}
                onChange={(e) => handleChange(capital.id, 'lat', parseFloat(e.target.value))}
              />
              <input
                type="number"
                value={capital.lng}
                onChange={(e) => handleChange(capital.id, 'lng', parseFloat(e.target.value))}
              />
              <button onClick={() => handleDelete(capital.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
  
        <h2>⬇️ Ajouter une nouvelle capitale ⬇️</h2>
        <input
          placeholder="Pays"
          value={newCapital.country}
          onChange={(e) => setNewCapital({ ...newCapital, country: e.target.value })}
        />
        <input
          placeholder="Ville"
          value={newCapital.city}
          onChange={(e) => setNewCapital({ ...newCapital, city: e.target.value })}
        />
        <input
          placeholder="Population"
          type="number"
          value={newCapital.population}
          onChange={(e) => setNewCapital({ ...newCapital, population: parseInt(e.target.value) })}
        />
        <input
          placeholder="Latitude"
          type="number"
          value={newCapital.lat}
          onChange={(e) => setNewCapital({ ...newCapital, lat: parseFloat(e.target.value) })}
        />
        <input
          placeholder="Longitude"
          type="number"
          value={newCapital.lng}
          onChange={(e) => setNewCapital({ ...newCapital, lng: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddCapital}>Ajouter</button>
      </div>
    );
  }
  
  export default Screen2;
  