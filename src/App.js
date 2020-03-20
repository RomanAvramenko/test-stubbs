import React from 'react';
import { Header } from './components/Header/Header';
import { Carousel } from './components/Carousel/Carousel';
import { Services } from './components/Servises/Services';
import { Company } from './components/Company/Company';
import { Footer } from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Services />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
