import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';


function App() {

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex />

    </div>
  );
}

export default App;
