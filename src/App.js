import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar'; //annoying for dublicated text
import FactList from './components/FactList'; //annoying for index.js file 

function App() {
  return (
    <>
    <Navbar/>
    <FactList/>
    </>
  );
}

export default App;
