import React from 'react';
import Header from './components/Header';
import Consultor from './components/Consultor';
import Alimentos from './components/Alimentos';
import Lista from './components/Lista';
import Colabore from './components/Colabore';
import Investimentos from './components/Investimentos';
import Oportunidades from './components/Oportunidades';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Consultor />
      <Alimentos />
      <Lista />
      <Colabore />
      <Investimentos />
      <Oportunidades />
      <Footer />
    </>
  );
}

export default App;
