import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default App;
