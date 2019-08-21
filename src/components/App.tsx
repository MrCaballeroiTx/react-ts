import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from '../containers/PokemonSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch/>
    </div>
  );
}

export default App;
