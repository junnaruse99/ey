import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/splash';
import Insertar from './components/articulo/insertar';
import Eliminar from './components/articulo/eliminar';
import Modificar from './components/articulo/modificar';

function App() {
  return (
    <Router basename='/'>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/insertar-articulo" element={<Insertar />} />
      <Route path="/modificar-articulo" element={<Modificar />} />
      <Route path="/eliminar-articulo" element={<Eliminar />} />
    </Routes>
  </Router>
  );
}

export default App;
